const db = require('../data/database');

class Quote {
  static async getRandomQuote() {
    const quotes = await db.getDB().collection('quotes').find().toArray();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex].text;
  }
}

module.exports = Quote;