var orm = require('../config/orm.js');

var Burger = {
  all: function(callback) {
    orm.selectAll(callback);
  },
  create: function(name, callback) {
    orm.insertOne(name, callback);
  },
  update: function(id, props, callback) {
    orm.updateOne(id, props, callback)
  },
};

module.exports = Burger;
