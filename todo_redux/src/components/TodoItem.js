import React from 'react';

const TodoItem = props => {
    console.log('todoitem : ', props);
    return (
        <li className={`TodoItem ${props.completed ? 'completed' : 'umcompleted'}`} onClick={props.onClick}>
            <span>{props.todo}</span>
            <img src={props.completed ? 'check.png' : 'exit.png'} />
        </li>
    )
};

export default TodoItem;