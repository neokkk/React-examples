import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';
import * as postActions from '../store/modules/post';

const NewsList = props => {
    console.log('newslist');
    console.log(props);
    const { category, post, loading, error } = props;

    useEffect(props => {
        const { PostActions, category } = props;
        PostActions.getPost(category);
    }, [category]);

    return (
        <>
            { loading && <h3>Loading...</h3> }
            { error ? <h3>Error!</h3> :
                <ul>
                    {post && post.map((value, index) => (
                        <NewsItem key={index} data={value}></NewsItem>
                    ))}
                </ul>
            }
        </>
    );
};

export default connect(
    state => ({
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }),
    dispatch => ({ PostActions: bindActionCreators(postActions, dispatch) })
)(NewsList);