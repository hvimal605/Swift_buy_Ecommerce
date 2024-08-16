// api/controllers/productController.js
const natural = require('natural');
const Product = require('../models/Productmodel'); // Import the Product model
const NodeCache = require('node-cache'); // In-memory caching library

const { TfIdf, PorterStemmer, WordTokenizer } = natural;

// Initialize tokenizer and cache
const tokenizer = new WordTokenizer();
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 }); // Cache for 1 hour

let tfidf = new TfIdf();
let productCache = {};

async function preprocessProducts() {
    const products = await Product.find({});
    products.forEach(product => {
        const text = `${product.Title} ${product.Description} ${product.Category}`.toLowerCase();
        const tokens = tokenizer.tokenize(text).map(token => PorterStemmer.stem(token));
        productCache[product._id] = {
            ...product.toObject(),
            stemmedTokens: tokens
        };
        tfidf.addDocument(tokens.join(' '));
    });

    // Cache the preprocessed products
    cache.set('preprocessedProducts', productCache);

    console.log('Products and TF-IDF documents preprocessed.');
}

preprocessProducts();

async function searchProducts(req, res) {
    const query = req.body.query;
    if (!query) {
        return res.status(400).json({ error: "Query is required" });
    }

    // Check cache first
    const cachedProducts = cache.get('preprocessedProducts');
    if (!cachedProducts) {
        return res.status(500).json({ error: "Preprocessed products are not available" });
    }

    // Tokenize and stem the query
    const queryTokens = tokenizer.tokenize(query.toLowerCase()).map(token => PorterStemmer.stem(token));
    console.log('Query Tokens:', queryTokens); // Debugging statement

    // Calculate TF-IDF scores
    const similarities = [];
    tfidf.tfidfs(queryTokens.join(' '), (i, measure) => {
        const productId = Object.keys(cachedProducts)[i];
        similarities.push({ product: cachedProducts[productId], score: measure });
    });

    similarities.sort((a, b) => b.score - a.score);

    if (similarities.length === 0) {
        return res.status(404).json({ message: 'No results found' });
    }

    const results = similarities.slice(0, 10).map(sim => ({
        title: sim.product.Title,
        description: sim.product.Description,
        category: sim.product.Category,
        similarity: sim.score,
    }));

    res.json(results);
}

module.exports = { searchProducts };
