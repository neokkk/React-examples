import React, { Component } from 'react';
import axios from 'axios';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
];

const Categories = ({ onSelect, category }) => {
    return (
        <ul>
            {categories.map(category => (
                <Categories
                    key={category.name}
                    activeClassName="active"
                    exact={category.name === 'all'}
                    to={category.name === 'all' ? '/' : `/${category}`}>
                    <a href="">{category.text}</a>
                </Categories>
            ))}
        </ul>
    );
}

export default Categories;