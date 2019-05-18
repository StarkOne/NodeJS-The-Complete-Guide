/* globals require console __dirname */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/admin", adminData.router);
app.use(shopRoutes);

// error 404 
app.use(function (req, res, next) {
  res.status(404).render("404", { pageTitle: "404 Not Found" });
});

app.listen(3000, () => {
  console.log("Сервер запущен!");
});