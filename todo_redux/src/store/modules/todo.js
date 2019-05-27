// action type (ducks type)
const ADD_TODO = 'todo/ADD_TODO';
const COMPLETE_TODO = 'todo/COMPLETE_TODO';

// action create function
export const addTodo = todo => ({ type: ADD_TODO, todo });
export const completeTodo = index => ({ type: COMPLETE_TODO, index });

// reducer
export default function todo(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                { todo: action.todo, completed: false }
            ]

        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], { completed: true }),
                ...state.slice(action.index + 1)
            ]

        default:
            return state;
    }
}