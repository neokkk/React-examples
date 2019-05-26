import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    return (
        <ul className="TodoList">
            {props.todos && props.todos.map((todo, index) => 
                <TodoItem {...todo} key={index} onClick={() => props.onTodoClick(index)} />
            )}
        </ul>
    );
};

export default TodoList;