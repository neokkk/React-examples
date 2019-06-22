import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { addTodo, changeInput } from '../store/modules/todo';
console.log(addTodo());

const AddTodo = props => {
    const todo_input = useRef(null);
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        const todoInput = todo_input.current.value;
        console.log(todoInput);

        addTodo(todoInput);
        changeInput(todoInput);

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

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
    changeInput: input => dispatch(changeInput(input))
});

export default connect(null, mapDispatchToProps)(AddTodo);