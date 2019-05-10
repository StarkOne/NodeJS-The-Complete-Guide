/* globals require console */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/admin",adminRoutes);
app.use(shopRoutes);

// error 404 
app.use(function (req, res, next) {
  res.status(404).send("<h1>404 Sorry cant find that!</h1>");
});

app.listen(3000, () => {
  console.log("Сервер запущен!");
});