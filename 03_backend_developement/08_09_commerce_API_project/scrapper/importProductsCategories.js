// const request = require("request");
// const PG = require("pg");
//
// const client = new PG.Client();
// client.connect();
//
// let counter = 0;
// let productsCategories;
//
// function importProductsCategories() {
//   client.query(
//     "SELECT id FROM categories",
//     [],
//     function(error, result) {
//       if (error) {
//         client.end();
//         console.warn(error);
//       } else {
//         console.log(`Import category: ${result.rows.id}`);
//         result.rows.forEach(function(row) {
//           importProductsCategory(row, result.rows.length);
//         });
//       }
//     }
//   );
// }
//
// function importProductsCategory(category, total) {
//   request({
//     url: `https://decath-product-api.herokuapp.com/categories/${category.id}/products`
//   }, function(error, response, body) {
//     if (error) {
//       console.warn(error);
//       return;
//     }
//     const products = JSON.parse(body);
//     productsCategories.push(
//       products.map(row => {
//         return {category_id: category.id, product_id: row.id};
//       })
//     );
//
//     counter++;
//     if (counter >= total) {
//       counter = 0;
//       productsCategories.forEach(function(productCategory) {
//         client.query(
//           "INSERT INTO products_categories (category_id, products_id) VALUES ($1::uuid, $2::text)",
//           [productCategory.category_id, productCategory.product_id],
//           function(error, result) {
//             if (error) {
//               console.warn(error);
//             }
//             if (counter >= productsCategories.length) {
//               client.end();
//             }
//           }
//         );
//       });
//     }
//   });
// }
//
// importProductsCategories();

const request = require("request");
const PG = require("pg");

const client = new PG.Client();
client.connect();

let counter = 0;
const productCategoryList = [];

request(
  { url: "https://decath-product-api.herokuapp.com/categories" },
  function(error, response, body) {
    const categories = JSON.parse(body);
    categories.forEach(function(category) {
      request(
        { url: `http://decath-product-api.herokuapp.com/categories/${category.id}/products` },
        function( error, response, body) {
          // console.log(`https://decath-product-api.herokuapp.com/categories/${category.id}/products`);
          // console.log(error);
          // console.log(body);
          if (body) {
            const products = JSON.parse(body);
            products.forEach(function(product) {
              productCategoryList.push({
                categoryId: category.id,
                productId: product.id
              });
            });
          }
          counter++;
          if (counter >= categories.length) {
            counter = 0;
            productCategoryList.forEach(function(productCategory) {
              client.query(
                "INSERT INTO products_categories (category_id, product_id) VALUES ($1::uuid, $2::uuid)",
                [productCategory.categoryId, productCategory.productId],
                function(error, result) {
                  if (error) {
                    console.warn(error);
                  } else {
                    counter++;
                    if (counter >= productCategoryList.length) {
                      client.end();
                    }
                  }
                }
              );
            });
          }
        }
      );
    });
  }
);
