const request = require("request");
const PG = require("pg");

const client = new PG.Client();
client.connect();

let counter = 0;

function importProducts() {
  request({
    url: "https://decath-product-api.herokuapp.com/products"
  }, function(error, response, body) {
    if (error) {
      console.warn(error);
      return;
    }
    const products = JSON.parse(body);

    products.forEach(function(product) {
      insertProduct(product, products.length);
    });
  });
}


function insertProduct(product, total) {
  client.query(
    "INSERT INTO products\
     (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating)\
     VALUES ($1::uuid, $2::integer, $3::text, $4::text, $5::uuid, $6::numeric, $7::numeric, $8::numeric, $9::smallint, $10::varchar(100), $11::numeric)",
    [product.id, product.decathlon_id, product.title, product.description, product.brand_id, product.min_price, product.max_price, product.crossed_price, product.percent_reduction, product.image_path, product.rating],
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

importProducts();
