import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

function getPostAPI(post) {
    const query = post ? `&${post}` : '';
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=161e1b76750143409d08fa2a77972db2`);
}

const GET_POST_PENDING = 'post/GET_POST_PENDING';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

export const getPostPending = createAction(GET_POST_PENDING);
export const getPostSuccess = createAction(GET_POST_SUCCESS, response => response);
export const getPostFailure = createAction(GET_POST_FAILURE, error => error);


export const getPost = post => dispatch => {
    getPostPending(); // request

    return getPostAPI(post)
            .then(res => getPostSuccess(res))
            .catch(err => getPostFailure(err));
}

const initialState = {
    pending: false,
    error: false,
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        }
    },
    [GET_POST_SUCCESS]: (state, action) => {
        const { title, body } = action.payload.data;

        return {
            ...state,
            pending: false,
            data: {
                title, body
            }
        }
    },
    [GET_POST_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);