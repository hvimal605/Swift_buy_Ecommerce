const express = require('express');
const natural = require('natural');
const Product = require('../models/Productmodel');  // Assuming you have a Mongoose model for Product

const router = express.Router();

const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;
const TfIdf = natural.TfIdf;

// Function to tokenize and stem text
function tokenizeStem(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }
  return tokenizer.tokenize(text.toLowerCase()).map(token => stemmer.stem(token)).join(' ');
}

// Function to compute cosine similarity
function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, val, i) => sum + (val * vecB[i]), 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + (val * val), 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + (val * val), 0));
  return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
}

router.post('/', async (req, res) => {
  const { query } = req.body;
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing query' });
  }

  try {
    const stemmedQuery = tokenizeStem(query);
    console.log('Stemmed Query:', stemmedQuery);

    const products = await Product.find();
    if (!products.length) {
      return res.status(404).json({ error: 'No products found' });
    }

    // Prepare TF-IDF vectors
    const tfidf = new TfIdf();

    products.forEach(product => {
      const productDescription = tokenizeStem(product.Description);
      tfidf.addDocument(productDescription);
    });

    const queryVector = [];
    tfidf.tfidfs(stemmedQuery, (i, measure) => {
      queryVector[i] = measure;
    });

    const similarities = products.map((product, index) => {
      const productVector = [];
      tfidf.tfidfs(tokenizeStem(product.Description), (i, measure) => {
        productVector[i] = measure;
      });
      const similarity = cosineSimilarity(queryVector, productVector);
      return { ...product._doc, similarity };
    });

    // Sort products by similarity in descending order and return top 10
    similarities.sort((a, b) => b.similarity - a.similarity);
    const topProducts = similarities.slice(0, 10);
    res.json(topProducts);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
