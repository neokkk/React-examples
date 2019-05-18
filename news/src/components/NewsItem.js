import React, { Component } from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    width: 600px;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    background-color: lightgray;

    h3 {
        color: black;

        a {
            color: black;

            :visited {
                color: black;
                text-decoration: none;
            }
        }
    }

    .wrap {
        width: 100%;
        height: 200px;
        display: flex;
        justify-contents: space-between;

        .thumbnail {
            width: 190px;
            height: 100%;
            background-image: url(${props => props.urlToImage});
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center;
        }

        .description {
            width: 390px;
        }
    }
`;

class NewsItem extends Component {
    state = {
        article: this.props.article
    }

    render() {
        const { title, source, description, url, urlToImage } = this.state.article;
        
        return (
            <NewsItemBlock urlToImage={urlToImage}>
                <h3 className="title"><a href={url} target="_blank">{title}</a></h3>
                <h4 className="name">{source.name}</h4>
                <div className="wrap">
                    {urlToImage && <div className="thumbnail" />}
                    <div className="content">{description}</div>
                </div>
            </NewsItemBlock>
        );
    }
}

export default NewsItem;