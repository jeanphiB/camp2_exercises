const PG = require("pg");

function getProduct(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products WHERE id = $1::uuid",
    [request.params.id],
    function(error, dbresult) {
      client.end();
      if (error) {
        result.json(error);
      } else {
        result.json(dbresult.rows[0]);
      }
    }
  );
}

module.exports = getProduct;
