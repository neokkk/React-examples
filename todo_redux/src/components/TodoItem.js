import React from 'react';

const TodoItem = props => {
    const { todo, onComplete } = props;

    return (
        <li className={`TodoItem ${todo.completed ? 'completed' : ''}`} onClick={() => onComplete(todo.id)}>
            <span>{todo.todo}</span>
            <img src={todo.completed ? 'check.png' : 'exit.png'} />
        </li>
    )
};

export default TodoItem;