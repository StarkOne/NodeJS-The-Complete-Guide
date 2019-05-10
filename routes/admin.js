/* globals require module console */
const express = require("express");
const router = express.Router();

router.get("/add-product", function (req, res) {
  res.send(`
    <form action="/product" method="POST" >
      <input type="text" name="title">
      <button type="submit">Add product</button>
    </form>
  `);
});

router.post("/product", function (req, res) {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;