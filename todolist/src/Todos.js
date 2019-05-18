import React, { Component } from "react";
import "./Todos.css";

class Todos extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todo !== this.props.todo;
  }

  render() {
    const { todo, onToggle, onRemove } = this.props;

    return (
      <div
        className={`Todos ${todo.checked && "active"}`}
        onClick={() => onToggle(todo.id)}
      >
        <div className="todoIndex">{todo.id}</div>
        <div className="todoText">{todo.input}</div>
        <div
          className="todoRemove"
          onClick={e => {
            e.stopPropagation();
            onRemove(todo.id);
          }}
        >
          Remove
        </div>
      </div>
    );
  }
}

export default Todos;
