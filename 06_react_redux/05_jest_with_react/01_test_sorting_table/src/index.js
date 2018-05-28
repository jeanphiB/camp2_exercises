import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import products from "./data/products.js";

ReactDOM.render(
  <App lines={products} />, document.getElementById("root"));
registerServiceWorker();
