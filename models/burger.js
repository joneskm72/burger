const connection = require("../config/connection");

class db {
  constructor() {
    this.connection = connection;
  }

  createBurger(id, burger_name, devoured) {
    return this.connection.query("INSERT INTO burgers SET ?", {
      id: id,
      burger_name: burger_name,
      devoured: devoured
    });
  }
}

module.exports = new db(connection);