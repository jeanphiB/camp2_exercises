import React, { Component } from 'react';
import './App.css';

function findUser(users, id) {
  const userFound = users.find((user) => { return user.id === id});
  return (userFound) ? userFound.name : "No one";
}

function DisplayExpenses(props) {
  const rows = props.expenses.map((expense, index) => {
    return (
      <tr key={index}>
        <td>{expense.what}</td>
        <td>{findUser(props.users, expense.who)}</td>
      </tr>
    )}
  );
  return (
    <table>
      <thead>
        <tr>
          <th>what has been paid</th>
          <th>by whom?</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// App has `expenses` and `users` as props
class App extends Component {
  render() {
    return (
      <div className="App">
        {DisplayExpenses(this.props)}
      </div>
    );
  }
}

export default App;
