const express = require('express');
const bcrypt = require("bcryptjs");

const db = require('../data/database');
const { render } = require('ejs');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('welcome');
});

router.get('/signup', function (req, res) {
  let sessionInput = req.session.inputData;

  if(!sessionInput) {
    sessionInput = {
      hasError: false,
      user: "",
      email: "",
      confirmEmail: "",
      pwd: "",
    };
  }
  req.session.inputData = null;
  res.render('signup', {inputData: sessionInput});
});

router.get('/login', function (req, res) {
  let sessionInput = req.session.inputData;

  if(!sessionInput) {
    sessionInput = {
      hasError: false,
      user: "",
      pwd: "",
    };
  }
  req.session.inputData = null;
  res.render('login', {inputData: sessionInput});
});

router.post('/signup', async function (req, res) {
  const userData = req.body;
  const username = userData.username;
  const email = userData.email;
  const confirmEmail = userData["confirm-email"];
  const password = userData.password;

  if(!email || !confirmEmail || !password || !username || password.trim() < 8 || email !== confirmEmail || !email.includes("@")) {
    req.session.inputData = {
      hasError: true,
      message: "Invalid Input!",
      user: username,
      email: email,
      confirmEmail: confirmEmail,
      pwd: password,
    };

    req.session.save(function() {
      //console.log("incorrect element!")
      res.redirect("/signup");
    });
    return;
  }

  const existingEmail = await db.getDb().collection("users").findOne({email: email});

  const existingUser = await db.getDb().collection("users").findOne({username: username});

  if(existingUser || existingEmail){
    req.session.inputData = {
      hasError: true,
      message: "User Exist! Please Login!",
      user: username,
      email: email,
      confirmEmail: confirmEmail,
      pwd: password,
    };
    req.session.save(function(){
      res.redirect("/signup");
    });
    //console.log("Allredy Have a Profile");
    return;
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
    req.session.inputData = {
      hasError: true,
      message: "Incorrect Credentials!",
      user: uid,
      pwd: password,
    };
    req.session.save(function(){
      res.redirect("/login");
    });
    //console.log("login error");
    return;
  }

  const check = await bcrypt.compare(password, existingUser.password);

  if(!check) {
    req.session.inputData = {
      hasError: true,
      message: "Incorrect Credentials!",
      user: uid,
      pwd: password,
    };
    req.session.save(function(){
      res.redirect("/login");
    });
    //console.log("pass error");
    return;
  }

  req.session.user = {id: existingUser._id, user: existingUser.username, email: existingUser.email};
  req.session.isAuthenticated = true;

  req.session.save(function() {
    //console.log("Authintication Successfull");
    res.redirect("/profile");
  });
});

router.get('/admin', async function (req, res) {
  if(!res.locals.isAuth) {
    return res.status(401).render("401");
  }

  if(!res.locals.admin) {
    return res.status(403).render("403");
  }
  res.render('admin');
});

router.post('/logout', function (req, res) {
  req.session.user = null;
  req.session.isAuthenticated = false;
  res.redirect("/");
});

router.get('/profile', function (req, res) {
  if(!res.locals.isAuth) {
    return res.status(401).render("401");
  }
  res.render('profile');
});

module.exports = router;
