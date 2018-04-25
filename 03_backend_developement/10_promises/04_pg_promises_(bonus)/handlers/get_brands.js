const PG = require("pg");

function getBrands(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query("SELECT * FROM brands", [])
    .then((dbresult) => {
      client.end();
      result.json(dbresult.rows);
    })
    .catch((error) => {
      client.end();
      result.json(error);
    });
}

module.exports = getBrands;
