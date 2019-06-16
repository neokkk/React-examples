import React, { useState, useRef } from 'react';

const AddTodo = props => {
    const todo_input = useRef(null);
    const [input, setInput] = useState('');
    const { onAddTodo } = props;

    const handleSubmit = () => {
        const todoInput = todo_input.current.value;
        console.log(todoInput);

        onAddTodo(todoInput);
        todo_input.current.value = '';
        todo_input.current.focus();
    }

    return (
        <form onSubmit={e => { e.preventDefault(); handleSubmit(); }} className="AddTodo">
            <input ref={todo_input} onChange={e => setInput(e.target.value)} placeholder='Please Enter your todos' required />
            <button>add</button>
        </form>
    );
};

export default AddTodo;