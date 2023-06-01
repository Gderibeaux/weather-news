import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import News from "./News/News";
import SingleArticle from "./SingleArticle/SingleArticle";
import Header from "./Header/Header"
import { getArticles } from './ApiCalls/ApiCalls';
import SearchPage from './Search/Search';

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
        <Header />
        <Switch>
          <Route exact path="/" render={() => <News newsData={this.state.news} />} />
          <Route path="/article/:key" component={SingleArticle} />
          <Route path='/search' component={SearchPage} />
        </Switch>
      </div>
    );
  }
}

export default App;