import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Article = () => (
  <div>
    <h2>Article</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/article">Article</Link></li>
          </ul>
        </div>

        <hr/>

        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/article" component={Article}/>
        </div>
      </div>
    );
  }
}

export default App;
