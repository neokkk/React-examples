import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';
import * as postActions from '../store/modules/post';

const NewsList = props => {
    console.log(props);


    return (
        <NewsList>
            <ul>
                
            </ul>
        </NewsList>
    );
};

export default connect(
    state => ({
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }),
    dispatch => { PostActions: bindActionCreators(postActions, dispatch) }
)(NewsList);