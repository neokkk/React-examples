import React, { useState } from 'react';

const handleSubmit = e => {

}

const AddTodo = () => {
    const [input, setInput] = useState('');

    return (
        <form onSubmit={e => { e.preventDefault(); handleSubmit(e) }} className="AddTodo">
            <input name="todo_input" onChange={e => setInput(e.target.value)} />
            <button>add</button>
        </form>
    );
};

export default AddTodo;