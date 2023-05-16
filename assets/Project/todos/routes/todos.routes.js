const express = require("express");
const router = express.Router();

const todosController = require("../controllers/todos.controller");

router.get('/', todosController.getAll);

router.post('/', todosController.add);

module.exports = router;