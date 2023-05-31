import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import './News.css';

const News = ({ newsData }) => {
  const newsArticles = newsData.map((news, index) => (
    <Link
      key={index}
      to={{
        pathname: `/article/${news.title}`,
        state: { newsData }
      }}
    >
      <Card
        key={index}
        title={news.title}
        description={news.description}
        imageUrl={news.urlToImage}
      />
    </Link>
  ));

  return <div className="news-container">{newsArticles}</div>;
};

export default News;