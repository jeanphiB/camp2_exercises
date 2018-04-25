const request = require("request");
const PG = require("pg");

const client = new PG.Client();
client.connect();

let counter = 0;
let productsCategories;

function importProductsCategories() {
  client.query(
    "SELECT id FROM categories",
    [],
    function(error, result) {
      if (error) {
        client.end();
        console.warn(error);
      } else {
        console.log(`Import category: ${result.rows.id}`);
        result.rows.forEach(function(row) {
          importProductsCategory(row, result.rows.length);
        });
      }
    }
  );
}

function importProductsCategory(category, total) {
  request({
    url: `https://decath-product-api.herokuapp.com/categories/${category.id}/products`
  }, function(error, response, body) {
    if (error) {
      console.warn(error);
      return;
    }
    const products = JSON.parse(body);
    productsCategories.push(
      products.map(row => {
        return {category_id: category.id, product_id: row.id};
      })
    );

    counter++;
    if (counter >= total) {
      counter = 0;
      productsCategories.forEach(function(productCategory) {
        client.query(
          "INSERT INTO products_categories (category_id, products_id) VALUES ($1::uuid, $2::text)",
          [productCategory.category_id, productCategory.product_id],
          function(error, result) {
            if (error) {
              console.warn(error);
            }
            if (counter >= productsCategories.length) {
              client.end();
            }
          }
        );
      });
    }
  });
}

importProductsCategories();
