const express = require('express');
const multer = require("multer");

const upload = multer({dest: "images"});
const router = express.Router();

router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

router.post("/profiles", upload.single("image"), function(res, req) {
  const uploadedImageFile = req.file;
  const userData = req.body;

  res.redirect("/");
});

module.exports = router;