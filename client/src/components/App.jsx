import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addNewTodo() {}

  markDone() {}

  deleteTodo() {}

  render() {
    return (
      <main>
        <h1>TODOS!!!</h1>
        <AddTodo />
        <ul>
          <Todo>set up app state</Todo>
          <Todo>dynamical render app list</Todo>
          <Todo>implement add </Todo>
          <Todo>implement delete and mark done</Todo>
        </ul>
      </main>
    );
  }
}
export default App;
