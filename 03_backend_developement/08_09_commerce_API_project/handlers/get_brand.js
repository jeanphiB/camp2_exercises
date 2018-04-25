const PG = require("pg");

function getBrand(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands WHERE id = $1::uuid",
    [request.params.id],
    function(error, dbresult) {
      client.end();
      if (error) {
        result.json(error);
      } else {
        if (dbresult.rows.length === 0) {
          result.json({message: "No data returned from the query."});
        } else {
          result.json(dbresult.rows[0]);
        }
      }
    }
  );
}

module.exports = getBrand;
