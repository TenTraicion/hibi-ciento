const TodosApp = {
  data() {
    return {
      newTodo: 'Learn Vue.js!',
      enteredValue: '',
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();
      this.newTodo = this.enteredValue;
      this.enteredValue = '';
    },
  },
};

Vue.createApp(TodosApp).mount("#todos-app");