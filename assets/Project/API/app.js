const express = require('express');

const app = express();

app.get('/quote', function(req, res, next) {
  res.json({
			quote: "Write tests, not too many, mostly integration",
		});
});

app.listen(3000);