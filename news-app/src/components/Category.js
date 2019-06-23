import React from 'react';

const categories = ['all', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const Category = props => {
    return (
        <ul className='Category'>
            {categories.map((c, index) => (
                <li 
                    key={index}
                    className={(props.category === c || '') ? 'active' : ''}
                    exact={c === 'all'}
                    to={c === 'all' ? '/' : `/${c}`}>{c}
                </li>
            ))}
        </ul>
    );
};

export default Category;