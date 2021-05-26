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
    /**
     * the default event of clicking a button in a form
     * is for it submit an http GET request.
     * to so this we must prevent the events default action
     */
    e.preventDefault();
    this.props.add(this.state.form);
    this.setState({ form: '' });
  }
  render() {
    return (
      <form action='submit'>
        {/* 
          by tying the the value of our input to the to the state we know that
          every time the state changes the value changes and every time the state changes
          the value changes. in react this is called a controlled component because 
          react not browser/dom defaults is in compleat control of the inputs value.
          this is the standard paradigm for react forms.
        */}
        <input
          placeholder='What To Do?'
          type='text'
          value={this.state.form}
          onChange={this.onChange}
        />
        <button type='submit' onClick={this.submit}>
          Add Todo
        </button>
      </form>
    );
  }
}

export default AddTodo;
