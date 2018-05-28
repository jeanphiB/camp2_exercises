import React, { Component } from 'react';
import './App.css';
import Book from "./Book"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: "978059651774",
    }
    this.state.isbn2display = this.state.isbn;
  }

  handleChange = (event) => {
    this.setState({isbn: event.target.value});
  }

  handleSearch = () => {
    this.setState({isbn2display: this.state.isbn});
  }

  componentDidMount() {
    this.setState({isbn2display: this.state.isbn});
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.isbn} onChange={this.handleChange} />
        <button onClick={this.handleSearch}>Search</button>
        <Book isbn={this.state.isbn2display} />
      </div>
    );
  }
}

export default App;
