import axios from 'axios';
import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.markDone = this.markDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  getTodo() {
    axios
      .get('/todo')
      .then(({ data }) => {
        this.setState({ todos: data });
      })
      .catch((err) => console.error(err));
  }
  componentDidMount() {
    this.getTodo();
  }
  addNewTodo(todo) {
    axios
      .post('/todo', todo)
      .then(() => this.getTodo())
      .catch((err) => console.error(err));
  }

  markDone(todo) {
    const done = !todo.done;
    axios
      .put(`/todo/${todo._id}`, { done })
      .then(() => this.getTodo())
      .catch((err) => console.error(err));
  }

  deleteTodo(id) {
    axios
      .delete(`/todo/${id}`)
      .then(() => this.getTodo())
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <main>
        <h1>TODOS!!!</h1>
        <AddTodo addNewTodo={this.addNewTodo} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          markDone={this.markDone}
        />
      </main>
    );
  }
}
export default App;
