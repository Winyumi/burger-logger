const connection = require("./connection.js");

const orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(table, burger_name, cb) {
    var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
    connection.query(queryString, [table, burger_name], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(table, id, devoured, cb) {
    if (devoured == "true") devoured = 1;
    var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
    connection.query(queryString, [table, devoured, id], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;
