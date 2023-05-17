const TodosApp = {
  data() {
    return {
      todos: [],
      enteredValue: '',
      editedID: '',
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      if (this.editedID) {
        const id = this.editedID;
        const index = this.todos.findIndex(function(todo) {
          return todo.id === id;
        });
        const updatedTodo = {
          text: this.enteredValue,
          id: this.todos[index].id,
        };
        this.todos[index] = updatedTodo;
        this.editedID = '';
      } else {
        const newTodo = {
          text: this.enteredValue,
          id: new Date().toISOString(),
        };
        this.todos.push(newTodo);
      }
      this.enteredValue = '';
    },
    editTodo(id) {
      this.editedID = id;
      const item = this.todos.find(function(todo) {
        return todo.id === id;
      });
      this.enteredValue = item.text;
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(function(todo) {
        return todo.id !== id;
      });
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");