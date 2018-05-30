import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div className="App">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
