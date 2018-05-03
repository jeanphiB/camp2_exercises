const PG = require("pg");

function getProducts(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products",
    [])
    .then((dbresult) => {
      client.end();
      if (dbresult.rows.length === 0) {
        result.json({message: "No data returned from the query."});
      } else {
        result.json(dbresult.rows);
      }
    })
    .catch((error) => {
      client.end();
      result.json(error);
    });
}

module.exports = getProducts;
