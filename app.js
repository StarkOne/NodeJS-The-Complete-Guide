/* globals require console __dirname */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/admin",adminRoutes);
app.use(shopRoutes);

// error 404 
app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Сервер запущен!");
});