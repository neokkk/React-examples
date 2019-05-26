import React from 'react';

const TodoItem = props => {
    return (
        <li className="TodoItem" onClick={props.onClick} style={{ textDecoration: props.complete ? 'line-through' : 'none',
            cursor: props.complete ? 'default' : 'pointer' }}>
            {props.todo}
        </li>
    );
};

export default TodoItem;