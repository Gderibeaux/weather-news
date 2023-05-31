import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import News from "./News/News";
import SingleArticle from "./SingleArticle/SingleArticle";
import { getArticles } from './ApiCalls/ApiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      error: ""
    };
  }

  componentDidMount() {
    getArticles()
      .then(newsData => {
        console.log(newsData);
        this.setState({ news: newsData.articles });
      })
      .catch(error => {
        console.error(error.message);
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <News newsData={this.state.news} />} />
          <Route path="/article/:key" component={SingleArticle} />
        </Switch>
      </div>
    );
  }
}

export default App;