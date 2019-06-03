import axios from require('axios');

// action type
const GET_NEWS = 'news/GET_NEWS';

// action making function
export const getNews = category => ({ type: GET_NEWS, category });

// initial state
const initialState = {
    category: 'all',
    data: null
};

// reducer
export default async function news(state = initialState, action) {
    switch(action.type) {
        case GET_NEWS:
            return {
                ...state,
                category: action.category,
                data: await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${action.category}&apiKey=161e1b76750143409d08fa2a77972db2`)
            }
    }
}