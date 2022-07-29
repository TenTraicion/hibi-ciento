const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/currenttime", function(req, res) {
  res.send(`<h1>${new Date().toISOString()}</h1>`);
});

app.get("/", function(req, res) {
  res.send("<form action=\"/store-user\" method=\"POST\"><label for=\"uname\">Your Name</label><input type=\"text\" name=\"uname\"><button>Submit</button></form>");
});

app.post("/store-user", function(req, res) {
  const uName = req.body.uname;
  console.log(uName);
  res.send("<h1>Username Stored!</h1>");
});

app.listen(3000);
