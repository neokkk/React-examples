import React, { useState, useRef } from 'react';

const AddTodo = props => {
    const todo_input = useRef(null);
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        const todoInput = todo_input.current.value;

        props.onTodoAdd(todoInput);
        todo_input.current.focus();
    }

    return (
        <form onSubmit={e => { e.preventDefault(); handleSubmit(e) }} className="AddTodo">
            <input ref={todo_input} onChange={e => setInput(e.target.value)} placeholder='Please Enter your todos' requiered />
            <button>add</button>
        </form>
    );
};

export default AddTodo;