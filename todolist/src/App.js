import React, { Component } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends Component {
  /* state */
  state = {
    todos: []
  };

  /* class property */
  id = 1;

  /* class method */
  handleCreate = input => {
    this.setState({
      todos: this.state.todos.concat({
        id: this.id,
        input,
        checked: false
      })
    });
    this.id++;
  };

  handleToggle = id => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) return { ...todo, checked: !todo.checked };
        else return todo;
      })
    });
  };

  handleRemove = id => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  /* render */
  render() {
    return (
      <div className="App">
        <TodoForm onCreate={this.handleCreate} />
        <TodoList
          todos={this.state.todos}
          onToggle={this.handleToggle}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
