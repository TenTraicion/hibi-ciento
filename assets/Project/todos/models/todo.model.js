const mongodb = require("mongodb");
const db = require("../data/database");

class Todo {
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }

  static async getAll() {
    const todoDocuments = await db.getDB().collection("todos").find().toArray();
    return todoDocuments.map(function(todo) {
      return new Todo(todo.text, todo._id);
    });
  }

  save() {
    if (this.id) {
      const id = new mongodb.ObjectId(this.id);
      return db.getDB().collection("todos").updateOne({_id: id}, {$set: {text: this.text}});
    } else {
      return db.getDB().collection("todos").insertOne({text: this.text});
    }
  }

  delete() {
    if (!this.id) {
      throw new Error("Todo not found!");
    }
    const id = new mongodb.ObjectId(this.id);
    return db.getDB().collection("todos").deleteOne({_id: id});
  }
}

module.exports = Todo;