const PG = require("pg");

function getCategories(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query("SELECT * FROM categories", [])
    .then((dbresult) => {
      client.end();
      result.json(dbresult.rows);
    })
    .catch((error) => {
      client.end();
      result.json(error);
    });
}

module.exports = getCategories;
