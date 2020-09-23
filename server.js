const mysql = require("mysql");
const db = require("./db/db");
const express = require("express");
const orm = require("./config/orm.js");
const handlebars = require("express-handlebars");
const routes = require("./controllers/burger_controller.js");

var app = express();
var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});