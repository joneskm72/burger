const express = require("express");
const handlebars = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});