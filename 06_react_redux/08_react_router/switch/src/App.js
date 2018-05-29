import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, NavLink } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const NoMatch = () => (
  <div>
    <h2>404 error</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Article = ({ match }) => (
  <div>
    <h3>Article id={match.params.topicId}</h3>
  </div>
)

const Articles = (({ match }) => {
  const activeStyle = {
    textDecoration: 'underline',
    color: 'red'
  };

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        <li>
          <NavLink to="42"
            activeStyle={activeStyle}>Article 42
          </NavLink>
        </li>
        <li>
          <NavLink to="1337"
            activeStyle={activeStyle}>Article 1337
          </NavLink>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Article}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select an Article</h3>
      )}/>
    </div>
  );
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/article">Article</Link></li>
            <li><Link to="/42">Article 42</Link></li>
            <li><Link to="/1337">Article 1337</Link></li>
          </ul>
        </div>

        <hr/>

        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/article" component={Articles}/>
            <Route path="/:topicId([0-9]*)" component={Article}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
