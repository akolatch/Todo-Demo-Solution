import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: '',
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    this.setState({ form: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    this.props.add(this.state.form);
    this.setState({ form: '' });
  }
  render() {
    return (
      <form action='submit'>
        <input type='text' value={this.state.form} onChange={this.onChange} />
        <button onClick={this.submit}>Add Todo</button>
      </form>
    );
  }
}

export default AddTodo;
