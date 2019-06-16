import React from 'react';

import Category from '../components/Category';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
    const category = match.params;

    return (
        <>
            <Category />
            <NewsList c={category} />
        </>
    );
};

export default NewsPage;