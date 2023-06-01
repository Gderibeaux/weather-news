import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchArticles } from '../ApiCalls/ApiCalls.js';

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const key = searchParams.get('q');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (key) {
      searchArticles(key)
        .then(data => setArticles(data.articles))
        .catch(error => console.error(error));
    }
  }, [key]);

  return (
    <div>
      <h1>Search Results for "{key}"</h1>
      {articles.length > 0 ? (
        articles.map(article => (
          <div key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
};

export default SearchPage;