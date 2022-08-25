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

  if(!email || !confirmEmail || !password || !username || password.trim() < 8 || email !== confirmEmail || !email.includes("@")) {
    console.log("incorrect element!")
    return res.redirect("/signup");
  }

  const existingEmail = await db.getDb().collection("users").findOne({email: email});

  const existingUser = await db.getDb().collection("users").findOne({username: username});

  if(existingUser || existingEmail){
    console.log("Allredy Have a Profile");
    return res.redirect("/login");
  }

  const pwd= await bcrypt.hash(password, 16);

  const user = {
    username: username,
    email: email,
    password: pwd,
  }

  await db.getDb().collection("users").insertOne(user);

  res.redirect("/login");
});

router.post('/login', async function (req, res) {
  const userData = req.body;
  const uid = userData.uid;
  const password = userData.password;

  let existingUser = await db.getDb().collection("users").findOne({email: uid});

  if(!existingUser) {
    existingUser = await db.getDb().collection("users").findOne({username: uid});
  }

  if(!existingUser){
    console.log("login error");
    return res.redirect("/login");
  }

  const check = await bcrypt.compare(password, existingUser.password);

  if(!check) {
    console.log("pass error");
    return res.redirect("/login");
  }

  req.session.user = {id: existingUser._id, user: existingUser.username, email: existingUser.email};
  req.session.isAuthenticated = true;

  req.session.save(function() {
    console.log("Authintication Successfull");
    res.redirect("/admin");
  });
});

router.get('/admin', function (req, res) {
  if(!req.session.isAuthenticated) {
    return res.status(401).render("401");
  }
  res.render('admin');
});

router.post('/logout', function (req, res) {});

module.exports = router;
