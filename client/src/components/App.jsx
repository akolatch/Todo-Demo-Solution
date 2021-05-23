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

  addNewTodo(todo) {
    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  }

  markDone(idx) {
    this.setState(({ todos }) => {
      const newTodos = todos.slice();
      newTodos[idx].done = !todos[idx].done;
      return { todos: newTodos };
    });
  }

  deleteTodo(idx) {
    this.setState(({ todos }) => {
      const newTodos = todos.slice();
      newTodos.splice(idx, 1);
      return { todos: newTodos };
    });
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
