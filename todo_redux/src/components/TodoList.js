import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { completeTodo } from '../store/modules/todo';

const TodoList = props => {
    console.log('todolist : ', props);
    const { completeTodo, todos } = props;

    return (
        <ul className="TodoList">
            {todos && todos.map(todo => 
                <TodoItem todo={todo} key={todo.id} onComplete={completeTodo} />
            )}
        </ul>
    );
};

export default connect(state => ({ todos: state.todo.todos }), { completeTodo })(TodoList);