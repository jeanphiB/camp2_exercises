import React, { Component } from 'react';
import './App.css';

import _ from "underscore";

const products = [
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: undefined,
      order: "asc"
    }
  }

  onClickHeader(key) {
    if (this.state.key !== key) {
      this.state.key = key;
      this.state.order = "asc";
    } else {
      this.state.order = (this.state.order === "asc") ? "desc" : "asc";
    }
    this.setState({key: this.state.key, order: this.state.order});
  };

  renderHeaderRow(product) {
    const tableHeader = Object.keys(product).map((value) => {
      return <th onClick={() => this.onClickHeader(value)} key={value}>{value}</th>
    });
    return <tr>{tableHeader}</tr>;
  }

  renderRow(products) {
    let sortedProducts = _.sortBy(products, this.state.key);
    if (this.state.order === "desc") {
      sortedProducts = sortedProducts.reverse();
    }

    let rows = sortedProducts.map((row, rowIndex) => {
      const keys = Object.keys(row);
      let htmlRow = Object.values(row).map((data, index) => {
        const key = [keys[index], rowIndex].join("_");
        return <td key={key} id={key}>{data}</td>;
      });
      return <tr key={rowIndex} id={rowIndex}>{htmlRow}</tr>;
    });
    return rows;
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            {this.renderHeaderRow(products[0])}
            {this.renderRow(products)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
