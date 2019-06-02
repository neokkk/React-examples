import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { addTodo, completeTodo } from './store/modules/todo';

import './App.css';

function App(props) {
  console.log('app : ', props);
  return (
    <div className="App">
      <h1>TODO</h1>
      <AddTodo onTodoAdd={text => addTodo(text)} />
      <TodoList todos={props.todos} onTodoClick={index => completeTodo(index)} />
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  completeTodo: todo => dispatch(completeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
