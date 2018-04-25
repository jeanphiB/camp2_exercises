const PG = require("pg");

function getProductsByCategory(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT p.* FROM products AS p INNER JOIN categories c ON p.category_id = c.id WHERE c.id = $1::uuid",
    [request.params.id],
    function(error, dbresult) {
      client.end();
      if (error) {
        result.json(error);
      } else {
        result.json(dbresult.rows);
      }
    }
  );
}

module.exports = getProductsByCategory;
