var mysql = require("mysql");

var connMySQL = function() {
  return mysql.createConnection({
    host: "localhost",
    user: "murilocht",
    password: "123456",
    database: "teste"
  });
};

module.exports = function() {
  return connMySQL;
};
