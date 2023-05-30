import React from 'react';
import Card from '../Card/Card.js'
import '../News/News.css';


const News = ({news}) => {
    const newsArticle = news.map(news => {
        return (
            <Card 
            id={news.id}
            key={news.id}
            title={news.title}
            img1={news.urlToImage}
            date={news.publishedAt}
            />
        )
    })

    return (
        <div className='news-container'>
            {newsArticle}
        </div>
    )
}

export default News;