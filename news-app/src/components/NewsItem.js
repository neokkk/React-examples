import React from 'react';

const NewsItem = props => {
    console.log('newsitem');
    console.log(props);
    const { title, body } = props.data;
    return (
        <NewsItem>
            <h1>{title}</h1>
            <p>{body}</p>
        </NewsItem>
    );
};

export default NewsItem;