var connection = require('./connection.js');

var orm = {
  selectAll: function(callback){
	console.log('ORM:selectAll');
	connection.query("SELECT * FROM burgers", function(err, res){
		if(err){
			throw err;
		} else {
			callback(res);
		}
	});
  },
  insertOne: function(burgerName, callback){
	console.log('ORM:insertOne');
	connection.query("INSERT INTO burgers SET ?", [{burger_name: burgerName}], function(err, res){
		if(err){
			throw err;
		} else {
			callback(res);
		}
	});
  },
  updateOne: function(id, props, callback){
	console.log('ORM:updateOne');
	connection.query("UPDATE burgers SET ? WHERE id = ?", [props, id], function(err, res){
		if(err){
			throw err;
		} else {
			callback(res);
		}
	});
  }
}

module.exports = orm;
  
