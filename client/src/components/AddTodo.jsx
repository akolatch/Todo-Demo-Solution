import React from 'react';

class AddTodo extends React.Component {
  render() {
    return (
      <form action='submit'>
        <input type='text' />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default AddTodo;
