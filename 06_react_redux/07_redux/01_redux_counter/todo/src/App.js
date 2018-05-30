import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
  handleChange = (event) => {
    this.props.dispatch({
      type: 'UPDATE_TASK',
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    this.props.dispatch({
      type: 'ADD_TASK',
      value: this.props.value
    });
    event.preventDefault();
  }

  handleCompleted = (event) => {
    this.props.dispatch({
      type: 'COMPLETE_TASK',
      key: event.target.value
    });
  }

  handleDelete = (event) => {
    this.props.dispatch({
      type: 'DELETE_TASK',
      key: event.target.value
    });
    event.preventDefault();
  }

  displayList(list) {
    const rows = list.map((row, index) => {
      return (
        <tr key={index} id={index}>
          <td>{row.title}</td>
          <td>
            <input
              type="checkbox"
              name="task"
              value={index}
              checked={row.completed}
              onChange={this.handleCompleted}
            />
          </td>
          <td>
            {row.completed && <button type="button" value={index} onClick={this.handleDelete}>Delete</button>}
          </td>
        </tr>
      );
    });
    return rows;
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Tasks</th>
                  <th>Completed</th>
                </tr>
                {this.displayList(this.props.list)}
              </tbody>
            </table>
          </div>
          <div>
            <label>
              Task:<input type="text" value={this.props.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(storeState) {
  return {
    list: storeState.list,
    value: storeState.value
  };
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
