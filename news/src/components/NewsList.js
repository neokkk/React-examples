import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

class NewsList extends Component {
    state = {
        loading: false,
        articles: null
    }

    loadData = async () => {
        try {
            this.setState({ loading: true });

            const { category } = this.props;
            const query = category === 'all' ? '' : `&category=${category}`;

            const res = await axios
                .get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=161e1b76750143409d08fa2a77972db2`);
                
            this.setState({ articles: res.data.articles });
        } catch (err) {
            console.error(err);
        }
        this.setState({ loading: false });
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.category !== this.props.category) this.loadData();
    }

    render() {
        const { articles, loading } = this.state;

        if (!articles || loading) return <div>Loading...</div>
        return (
            <div>
                {articles.map(article => (
                    <NewsItem key={article.url} article={article} />
                ))}
            </div>
        );
    }
}

export default NewsList;