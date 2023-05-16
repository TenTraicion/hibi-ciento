const Todo = require('../models/todo.model');

async function getAll(req, res, next) {
  let todos;
  try {
    todos = await Todo.getAll();
  } catch (err) {
    return next(err);
  }
  res.json({
    todos: todos
  });
}

async function add(req, res, next) {
  const text = req.body.text;
  const todo = new Todo(text);
  let insertedID;
  try{
    const result = await todo.save();
    insertedID = result.insertedId;
  } catch (err) {
    return next(err);
  }
  todo.id = insertedID.toString();
  res.json({
    message: 'Todo added successfully!',
    createdTodo: todo
  });
}

function update(req, res, next) {}

function remove(req, res, next) {}

module.exports = {
  getAll: getAll,
  add: add,
  update: update,
  remove: remove
};