/* globals require exports  */
const express = require("express");
const router = express.Router();
const products = [];

router.get("/add-product", function (req, res) {
  res.render("add-product", { docTitle: "Add product page", path: "/admin/add-product" });
});

router.post("/add-product", function (req, res) {
  const { title } = req.body;
  products.push({ title: title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;