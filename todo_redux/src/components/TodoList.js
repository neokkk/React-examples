import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { completeTodo } from '../store/modules/todo';

const TodoList = props => {
    console.log('todolist : ', props);
    const { completeTodo, todos } = props;

    return (
        <ul className="TodoList">
            {todos && todos.map((todo, index) => 
                <TodoItem todo={todo} key={index} onClick={() => completeTodo(index)} />
            )}
        </ul>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});
  
const mapDispatchToProps = dispatch => ({
    completeTodo: index => dispatch(completeTodo(index))
});  

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);