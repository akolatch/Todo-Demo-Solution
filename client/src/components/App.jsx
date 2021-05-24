import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
const sampleData = [
  { value: 'Set up React Dom', done: true },
  { value: 'Figure out data shape and make sample', done: true },
  { value: 'dynamically render sample data', done: false },
  { value: 'dynamically render sample data', done: false },
  { value: 'Implement add todo', done: false },
  { value: 'Implement mark done and delete', done: false },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: sampleData,
    };
    this.createTodo = this.createTodo.bind(this);
    this.markDone = this.markDone.bind(this);
    this.remove = this.remove.bind(this);
  }

  createTodo(value) {
    const newState = this.state.todoList.slice();
    newState.push({ value: value, done: false });
    this.setState({ todoList: newState });
  }

  markDone(i) {
    const newState = this.state.todoList.slice();
    newState[i].done = !newState[i].done;
    this.setState({ todoList: newState });
  }

  remove(i) {
    const newState = this.state.todoList.slice();
    newState.splice(i, 1);
    this.setState({ todoList: newState });
  }

  render() {
    return (
      <main>
        <h1>Todo</h1>
        <AddTodo add={this.createTodo} />
        <TodoList
          remove={this.remove}
          markDone={this.markDone}
          todos={this.state.todoList}
        />
      </main>
    );
  }
}

export default App;
