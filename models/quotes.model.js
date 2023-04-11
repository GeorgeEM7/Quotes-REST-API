const db = require("../data/database");

class Quote {
  static async getRandomeQuote() {
    const quotes = await db.getDb().collection("quotes").find().toArray();
    const randomeQuoteIndex = Math.floor(Math.random() * quotes.length);

    const randomeQuote = quotes[randomeQuoteIndex];

    return randomeQuote.text;
  }
}

module.exports = Quote;
