import { set } from 'mongoose';
import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: '',
    };
    this.onFormInput = this.onFormInput.bind(this);
    this.submitNewTodo = this.submitNewTodo.bind(this);
  }

  onFormInput(e) {
    this.setState({ formValue: e.target.value });
  }

  submitNewTodo(e) {
    e.preventDefault();
    this.props.addNewTodo({ value: this.state.formValue, done: false });
    this.setState({ formValue: '' });
  }

  render() {
    return (
      <form action='submit'>
        <input
          type='text'
          value={this.state.formValue}
          onChange={this.onFormInput}
        />
        <button onClick={this.submitNewTodo}>Add Todo</button>
      </form>
    );
  }
}

export default AddTodo;
