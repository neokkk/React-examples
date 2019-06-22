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
                    todo: action.todo,
                    completed: false
                })
            }

        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.forEach(todo => todo.index === action.index ? `${todo.completed}= true` : todo)
            }

        default:
            return state;
    }
}