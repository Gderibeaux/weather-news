import React, { Component } from "react";
import "./SingleArticle.css";

class SingleArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      error: ""
    };
  }

  async componentDidMount() {
    try {
      const { key } = this.props.match.params;
      const { newsData } = this.props.location.state;
      const article = newsData.find(news => news.title === key);
      this.setState({ article });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { article, error } = this.state;

    let whatToRender;
    if (article) {
      whatToRender = (
        <div className="backdrop">
          <div className="information">
            <h1>{article.title.toUpperCase()}</h1>
            <img className="single-img" src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <p>Published At: {article.publishedAt}</p>
            <p>Author: {article.author}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      );
    } else if (error) {
      whatToRender = <p className="Error">{error}</p>;
    } else {
      whatToRender = <p>Loading...</p>;
    }

    return <>{whatToRender}</>;
  }
}

export default SingleArticle;