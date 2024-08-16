// api/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controller/productSearch');

// Route to search products
router.post('/search', productController.searchProducts);

module.exports = router;
