const request = require("request");
const PG = require("pg");

const client = new PG.Client();
client.connect();

let counter = 0;

function importCategories() {
  request({
    url: "https://decath-product-api.herokuapp.com/categories"
  }, function(error, response, body) {
    if (error) {
      console.warn(error);
      return;
    }
    const categories = JSON.parse(body);

    categories.forEach(function(category) {
      insertCategory(category, categories.length);
    });
  });
}


function insertCategory(category, total) {
  client.query(
    "INSERT INTO categories (id, decathlon_id, label) VALUES ($1::uuid, $2::integer, $3::text)",
    [category.id, category.decathlon_id, category.label],
    function(error, result) {
      if (error) {
        console.warn(error);
        return;
      }
      counter++;
      if (counter >= total) {
        client.end();
      }
    }
  );
}

importCategories();
