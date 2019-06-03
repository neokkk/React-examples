import React from 'react';

const categories = ['all', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const Category = () => {
    return (
        <ul>
            {categories.map((c, index) => (
                <Category 
                    key={index}
                    activeClassName='active'
                    exact={c === 'all'}
                    to={c === 'all' ? '/' : `/${c}`}>
                        <a href=''>{c}</a>
                </Category>
            ))}
        </ul>
    );
};

export default Category;