const TodosApp = {
  data() {
    return {
      isLoading: false,
      todos: [],
      enteredValue: '',
      editedID: '',
    };
  },
  methods: {
    async saveTodo(event) {
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
        
        let response;

        try {
          response = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            body: JSON.stringify({
              text: this.enteredValue,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          alert('Something went wrong!');
          return;
        }

        if (!response.ok) {
          alert('Something went wrong!');
          return;
        }

        const responseData = await response.json();

        const newTodo = {
									text: this.enteredValue,
									id: responseData.createdTodo.id,
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
  async created() {
    let response;
    this.isLoading = true;
    try {
      response = await fetch('http://localhost:3000/todos');
    } catch (error) {
      alert('Something went wrong!');
      this.isLoading = false;
      return;
   }

   this.isLoading = false;

    if (!response.ok) {
     alert('Something went wrong!');
     return;
    }

    const responseData = await response.json();
    this.todos = responseData.todos;
  }
};

Vue.createApp(TodosApp).mount("#todos-app");