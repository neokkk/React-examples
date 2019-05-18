import React, { Component } from "react";
import "./TodoForm.css";

class TodoForm extends Component {
  state = {
    input: ""
  };

  handleSubmit = input => {
    this.props.onCreate(input);
    this.setState({
      input: ""
    });
  };

  handleInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div className="TodoForm">
        <form
          id="frm"
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(this.state.input);
          }}
        >
          <input
            id="formText"
            type="text"
            name="formText"
            value={this.state.input}
            placeholder="What should I have to do?"
            onChange={this.handleInput}
          />
          <button type="submit">enter</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
