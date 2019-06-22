import axios from 'axios';
import { createAction } from 'redux-actions';

// action type
const GET_CATEGORY = 'news/GET_CATEGORY';
const GET_NEWS = 'news/GET_NEWS';

// action making function
export const getCategory = createAction(GET_CATEGORY, category => category)
export const getNews = createAction(GET_NEWS, category => category);

// initial state
const initialState = {
    category: 'all',
    data: null
};

// reducer
export default async function news(state = initialState, action) {
    const query = action.category === 'all' ? '' : `&category=${action.category}`;
    const newsData = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=161e1b76750143409d08fa2a77972db2`);

    switch(action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        case GET_NEWS:
            return {
                ...state,
                data: newsData
            }
        default:
            return state;
    }
}