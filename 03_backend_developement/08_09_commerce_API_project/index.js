const express = require("express");
const app = express();

const getBrands = require("./handlers/get_brands");
const getBrand = require("./handlers/get_brand");
const getCategories = require("./handlers/get_categories");
const getCategory = require("./handlers/get_category");
const getProducts = require("./handlers/get_products");
const getProduct = require("./handlers/get_product");
const getProductsByCategory = require("./handlers/get_product_by_category");

app.get("/brands/:id", getBrand);
app.get("/brands", getBrands);
app.get("/categories/:id/products", getProductsByCategory);
app.get("/categories/:id", getCategory);
app.get("/categories", getCategories);
app.get("/products/:id", getProduct);
app.get("/products", getProducts);

app.get("/", function (request, result) {
  result.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
