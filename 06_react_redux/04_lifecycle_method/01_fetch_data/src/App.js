import React, { Component } from 'react';
import './App.css';

class DogApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: ""
    };
  }

  refresh() {
    fetch("https://random.dog/woof.json")
      .then(response => response.json())
      .then(data => {
        let url = "";
        if (data.url.substr(data.url.lastIndexOf('.') + 1) === "mp4") {
          url = (
            <video width="320" height="240" controls>
              <source src={data.url} type="video/mp4" />
            </video>
          );
        } else {
          url = <img src={data.url} alt="a dog" height="600"/>;
        }
        this.setState({ url: url });
      });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => this.refresh()}>Give me one more</button>
        </div>
        <div>
          {this.state.url}
        </div>
      </div>
    );
  }
}

export default DogApp;
