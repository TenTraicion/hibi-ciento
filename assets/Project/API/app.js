const express = require('express');
const quoteRoutes = require('./routes/quotes.routes');
const db = require("./data/database");

const app = express();

app.use('/quote', quoteRoutes);
app.use(function(err, req, res, next) {
  res.status(500).json({
    message: 'something went wrong!',
  });
});

db.initDB().then(function() {
  app.listen(3000);
}).catch(function(err) {
  console.log('connecting to the db failed');
});