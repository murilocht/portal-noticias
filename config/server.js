var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static("src/public"));
app.use(bodyParser.urlencoded({ extended: true }));

consign()
  .include("src/routes")
  .then("config/dbConnection.js")
  .then("src/models")
  .then("src/controllers")
  .into(app);

module.exports = app;
