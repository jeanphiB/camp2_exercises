const PG = require("pg");

function getBrands(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands",
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

module.exports = getBrands;
