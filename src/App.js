import './App.css';
import newsData from './newsData.js'
import React, { Component } from 'react'
import News from "./News/News.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: newsData.articles
    }
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>Weather News</h1>
        <News news={this.state.news}/>
      </header>
    </div>
  );
}
}

export default App;