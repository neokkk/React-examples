import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { addTodo, completeTodo } from './store/modules/todo';

import './App.css';

function App(props) {
  const { dispatch } = props;

  return (
    <div className="App">
      <h1>TODO</h1>
      <AddTodo onTodoAdd={text => dispatch(addTodo(text))} />
      <TodoList onTodoClick={index => dispatch(completeTodo(index))} />
    </div>
  );
}

export default connect()(App);
