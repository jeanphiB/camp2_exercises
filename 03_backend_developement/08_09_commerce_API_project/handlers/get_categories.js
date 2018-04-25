const PG = require("pg");

function getCategories(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories",
    [],
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

module.exports = getCategories;
