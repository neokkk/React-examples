import React from 'react';
import { connect } from 'react-redux';

import { addTodo, changeInput } from '../store/modules/todo';

const AddTodo = props => {
    const { input, addTodo, changeInput } = props;

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(input);
        changeInput('');
    }

    const handleChange = e => {
        const input = e.target.value;

        if (input.length > 21) {
            alert('20자 이내로 작성해주세요.');
            return;
        }

        changeInput(input);
    }

    return (
        <form onSubmit={handleSubmit} className="AddTodo">
            <input value={input} onChange={handleChange} placeholder='Please Enter your todos' required />
            <button>add</button>
        </form>
    );
};

export default connect(state => ({
    input: state.todo.input
}), {
    addTodo,
    changeInput
})(AddTodo);