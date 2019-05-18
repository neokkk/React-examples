import React, { Component } from "react";
import Todos from "./Todos";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div className="TodoList">
        {todos.map(todo => (
          <Todos
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
