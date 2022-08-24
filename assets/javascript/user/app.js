const path = require('path');

const express = require('express');
const session = require("express-session");
const mongostore = require("connect-mongodb-session");

const MongoDBStore = mongostore(session);

const db = require('./data/database');
const demoRoutes = require('./routes/demo');

const app = express();

const sessionStore = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017",
  databaseName: "auth-demo",
  collection: "sessions",
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret:"amijanina",
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
}));

app.use(demoRoutes);

app.use(function(error, req, res, next) {
  res.render('500');
})

db.connectToDatabase().then(function () {
  app.listen(3000);
});
