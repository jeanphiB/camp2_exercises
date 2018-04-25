const PG = require("pg");

function getCategories(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query("SELECT * FROM categories WHERE id = $1::uuid", [request.params.id])
    .then((dbresult) => {
      client.end();
      if (dbresult.rows.length === 0) {
        result.json({message: "No data returned from the query."});
      } else {
        result.json(dbresult.rows[0]);
      }
    })
    .catch((error) => {
      client.end();
      result.json(error);
    });
}

module.exports = getCategories;
