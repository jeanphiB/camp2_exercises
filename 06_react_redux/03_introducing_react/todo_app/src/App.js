import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: ''
    }

    this.addTask("sample task");
  }

  addTask(taskName) {
    this.state.list.push({task: taskName, completed: false});
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    this.addTask(this.state.value);
    this.setState({list: this.state.list, value: ''});
    event.preventDefault();
  }

  displayList() {
    const rows = this.state.list.map((row, index) => {
      const htmlTask = <td key={["task", index].join("_")}>{row.task}</td>;
      const key = ["completed", index].join("_");
      const htmlCompleted = <td key={key}><input type="checkbox" name="task" value={index} checked={row.completed}/></td>;
      return <tr key={index} id={index}>{htmlTask}{htmlCompleted}</tr>;
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
                {this.displayList()}
              </tbody>
            </table>
          </div>
          <div>
            <label>
              Task:<input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
