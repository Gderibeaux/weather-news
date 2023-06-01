require('dotenv-webpack').config();

const apiKey = process.env.REACT_APP_API_KEY;

const getArticles = () => {
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch articles");
        }
      })
      .catch(err => {
        console.log(err);
        throw new Error("Failed to fetch articles");
      });
  };
  
  const searchArticles = (key) => {
    return fetch(
      `https://newsapi.org/v2/everything?q=${key}&apiKey=${apiKey}`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch articles");
        }
      })
      .catch(err => {
        console.log(err);
        throw new Error("Failed to fetch articles");
      });
  };
  

  export  { getArticles, searchArticles };