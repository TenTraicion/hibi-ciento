const TodosApp = {
  data() {
    return {
      todos: [],
      enteredValue: '',
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      const newTodo = {
        text: this.enteredValue,
        id: new Date().toISOString(),
      };
      this.todos.push(newTodo);
      this.enteredValue = '';
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");