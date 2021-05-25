import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

/**
 * this is the sample data
 */
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

    // here we bind the context of this for each of our functions being passed down
    this.createTodo = this.createTodo.bind(this);
    this.markDone = this.markDone.bind(this);
    this.remove = this.remove.bind(this);
  }

  createTodo(value) {
    /**
     * when changing a value in state we must make sure we are reassigning that value
     *  not just modifying it. Because the this.state.todoList is an array we cannot just
     * simply push the new todo to it. instead we must create a true copy of that array
     * and modify that copy which has different reference then the original array.
     */
    const newState = this.state.todoList.slice();
    newState.push({ value: value, done: false });
    /**
     * when we set state we must use the setState method provided to us instead of trying to
     * reassign state directly
     */
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
          /**
           * to understand how props are passed we must remember that
           * TodoList is a function that will be invoked by react.
           * When TodoList is invoked react will pass it an object of all the
           * properties or 'props' we assigned it. When TodoList is invoke by React will be
           * passed a props object that looks like:
           * {
           *  remove: this.remove,
           *  markDone: this.markDone,
           *  todos: this.state.todoList
           * }
           *
           * The same is true of a class component
           */
          remove={this.remove}
          markDone={this.markDone}
          todos={this.state.todoList}
        />
      </main>
    );
  }
}

export default App;
