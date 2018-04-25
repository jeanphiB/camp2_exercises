const request = require("request");
const PG = require("pg");

const url = "https://decath-product-api.herokuapp.com/";

function importTable(table) {
  const uri = encodeURI(`${url}${table}`);

  request({
    url: uri,
    method: "GET"
  },
  function (error, response, body) {
    const tableContent = JSON.parse(body);
    insert(table, tableContent, 0);
  });
}

function insert(table, tableContent) {
  const client = new PG.Client();
  client.connect();

  console.log(`Start import table: ${table} with ${tableContent.length} records`);
  insertRecursive(table, tableContent, 0);

  function insertRecursive(table, array, index) {
    if (index >= array.length) {
      client.end();
      console.log("End import table: " + table);
    } else {
      let sql = "";
      let values = [];
      const row = array[index];

      switch (table) {
      case "brands":
        sql = "INSERT INTO brands (id, title) VALUES ($1::uuid, $2::text)";
        values = [row.id, row.title];
        break;

      case "categories":
        sql = "INSERT INTO categories (id, decathlon_id, label) VALUES ($1::uuid, $2::integer, $3::text)";
        values = [row.id, row.decathlon_id, row.label];
        break;

      case "products":
        sql = "INSERT INTO products\
         (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating)\
         VALUES ($1::uuid, $2::integer, $3::text, $4::text, $5::uuid, $6::numeric, $7::numeric, $8::numeric, $9::smallint, $10::varchar(100), $11::numeric)";
        values = [row.id, row.decathlon_id, row.title, row.description, row.brand_id, row.min_price, row.max_price, row.crossed_price, row.percent_reduction, row.image_path, row.rating];
        break;

      case "products_categories":
        sql = "INSERT INTO products_categories (category_id, products_id) VALUES ($1::uuid, $2::text)";
        values = [row.id, array[index].title];
        break;
      }

      client.query(
        sql,
        values,
        function(error, result) {
          if (error) {
            console.warn(error);
            client.end();
          } else {
            //console.warn(result.rowCount, index);
            insertRecursive(table, array, index + 1);
          }
        }
      );
    }
  }
}

importTable("brands");
importTable("categories");
importTable("products");
importProductCategory();

function importProductCategory() {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT id FROM categories",
    [],
    function(error, result) {
      if (error) {
        client.end();
        console.warn(error);
      } else {
        client.end();
        console.log(`Import category: ${result.rows}`);

        result.rows.forEach(row => {
          request({
            url: encodeURI(`${url}categories/${row.id}/products`),
            method: "GET"
          },
          function (error, response, body) {
            const tableResult = JSON.parse(body);
            const tableContent = tableResult.map(row => {products_id: row.id});
            insert("products_categories", tableContent, 0);
          });
        });
      }
    }
  );
}

function getProductsByCategory(category) {

  request(
    {
      url: uri,
      method: "GET"
    },
    function (error, response, body) {
      const tableContent = JSON.parse(body);
      tableContent.forEach(function (row) {
        //console.log(category.id, row.id);
        client.query(
          "INSERT INTO products_categories (category_id, product_id) VALUES ($1, $2)",
          [category.id, row.id],
          function(error, result) {
            if (error) {
              console.warn(row, error);
            } else {
              console.log(result.rowCount);
            }
            //client.end();
          }
        );
      });
    }
  );
}


//productsByCategory();
//client.end();
