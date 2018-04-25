const fetch = require("node-fetch");

function getProduct(productId) {
  return fetch(
    `https://decath-product-api.herokuapp.com/products/${productId}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      return fetch(
        `https://decath-product-api.herokuapp.com/brands/${result.brand_id}`,
        {method: "GET"}
      );
    })
    .then((response) => response.json());
}

getProduct("efe288cb-fb63-4b23-b8df-529f04b8b02b")
  .then((result) => console.log("brand: ", result.title))
  .catch((error) => console.warn(error));
