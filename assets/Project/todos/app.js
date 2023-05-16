const express = require("express");
const db = require("./data/database");
const todosRoutes = require("./routes/todos.routes");

const app = express();

app.use(express.json());

app.use('/todos', todosRoutes);

app.use(function (err, req, res, next) {
	res.status(500).json({
		message: "something went wrong!",
	});
});

db
	.initDB()
	.then(function () {
		app.listen(3000);
	})
	.catch(function (err) {
		console.log("connecting to the db failed");
	});
