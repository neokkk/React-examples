import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from '../../../../tal-ing/lec04/src/NewsItem';

const NewsListBlock = styled.div`
    padding-bottom: 3rem;
    width: 960px;
    margin: 0 auto;
`;

class NewsList extends Component {
    state = {
        loading: false,
        articles: null
    }

    loadData = async () => {
        try {
            this.setState({ loading: true });

            const res = await axios
                .get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=161e1b76750143409d08fa2a77972db2');
                
            this.setState({ articles: res.data.articles });
        } catch (err) {
            console.error(err);
        }
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const { articles, loading } = this.state;

        if (!articles || loading) return <NewsListBlock>Loading...</NewsListBlock>
        return (
            <NewsListBlock>
                articles.map(article => {
                    <NewsItem key={articles.url} article={article} />
                })
            </NewsListBlock>
        );
    }
}

export default NewsList;