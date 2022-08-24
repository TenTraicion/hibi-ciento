const express = require('express');
const bcrypt = require("bcryptjs");

const db = require('../data/database');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('welcome');
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/signup', async function (req, res) {
  const userData = req.body;
  const username = userData.username;
  const email = userData.email;
  const confirmEmail = userData["confirm-email"];
  const password = userData.password;

  const pwd= await bcrypt.hash(password, 16);

  const user = {
    username: username,
    email: email,
    password: pwd,
  }

  await db.getDb().collection("users").insertOne(user);

  res.redirect("/login");
});

router.post('/login', async function (req, res) {});

router.get('/admin', function (req, res) {
  res.render('admin');
});

router.post('/logout', function (req, res) {});

module.exports = router;
