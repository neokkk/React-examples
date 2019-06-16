import React from 'react';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';
import { getNews } from '../store/modules/news';

const NewsList = props => {
    console.log(props);
    const { c, category, data } = props;

    const handleCategory = () => {
        getNews(c);
    }

    return (
        <NewsList onAddCategory={handleCategory}>
            <ul>
                {data && data.map((value, index) => (
                    <li><NewsItem key={index} data={value} /></li>
                ))}
            </ul>
        </NewsList>
    );
};

export default connect(
    state => ({ category: state.category, data: state.data }),
    dispatch => ({ getNews: category => dispatch(getNews(category)) })
)(NewsList);