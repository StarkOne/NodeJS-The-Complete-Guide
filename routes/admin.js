/* globals require module console  */
const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

router.get("/add-product", function (req, res) {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", function (req, res) {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;