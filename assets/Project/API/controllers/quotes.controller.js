const Quote = require('../models/quotes.model');

async function getRandomQuote(req, res, next) {
  let randomQuote;
  try{
    randomQuote = await Quote.getRandomQuote();
  } catch(err) {
    return next(err);
  }
  res.json({
    quote: randomQuote,
  });
}

module.exports = {
  getRandomQuote: getRandomQuote,
};