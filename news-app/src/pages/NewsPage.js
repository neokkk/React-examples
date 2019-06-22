import React from 'react';

import Category from '../components/Category';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
    const category = match.params || 'all';

    return (
        <>
            <Category category={category} />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;