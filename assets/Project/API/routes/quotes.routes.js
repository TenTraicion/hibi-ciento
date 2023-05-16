const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotes.controller');

router.get('/', quotesController.getRandomQuote);

module.exports = router;