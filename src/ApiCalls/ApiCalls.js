const getArticles = () => {
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=b0535d72107e42b4a5469f0fbfee59d8`
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
      `https://newsapi.org/v2/everything?q=${key}&apiKey=b0535d72107e42b4a5469f0fbfee59d8`
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