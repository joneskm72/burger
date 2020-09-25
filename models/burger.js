var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },

  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {devoured: true}, condition, cb)
    },
  }



// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
