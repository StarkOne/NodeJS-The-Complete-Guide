/* globals require console __dirname */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const errorsController = require("./controllers/errors");
const app = express();
console.log(errorsController);
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// error 404 
app.use(errorsController.get404);

app.listen(3000, () => {
  console.log("Сервер запущен!");
});