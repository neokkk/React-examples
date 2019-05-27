import React from 'react';

const TodoItem = props => {
    return (
        <li className={`TodoItem ${props.complete ? 'completed' : 'umcompleted'}`} onClick={props.onClick}>
            {props.todo}
            <img src={props.complete ? '../public/check.png' : '../public/exit.png'} />
        </li>
    );
};

export default TodoItem;