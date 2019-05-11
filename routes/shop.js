/* globals module require */
const express = require("express");
const adminData = require("./admin");
const routes = express.Router();

routes.get("/", (req, res) => {
  const products = adminData.products;
  res.render("shop", { prods: products, 
                      docTitle: "Shop"});
});

module.exports = routes;