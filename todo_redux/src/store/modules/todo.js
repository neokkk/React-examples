// action type (ducks type)
const ADD_TODO = 'todo/ADD_TODO';
const COMPLETE_TODO = 'todo/COMPLETE_TODO';
const CHANGE_INPUT = 'todo/CHANGE_INPUT';

// action create function
export const addTodo = todo => ({ type: ADD_TODO, todo });
export const completeTodo = index => ({ type: COMPLETE_TODO, index });
export const changeInput = input => ({ type: CHANGE_INPUT, input });

// inital state
const initialState = {
    input: '',
    todos: []
}

let id = 1;

// reducer
export default function todo(state = initialState, action) {

    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            }

        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    id: id++,
                    todo: action.todo,
                    completed: false
                })
            }

        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.index ? {...todo, completed: !todo.completed} : todo)
            }

        default:
            return state;
    }
}