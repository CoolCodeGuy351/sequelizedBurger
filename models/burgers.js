// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burger_table', function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne('burger_table', "burger_name", value, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne('burger_table', 'devoured', '1', 'id', condition, function(res) {
            cb(res);
        })
    }

};


// Export the database functions for the controller
module.exports = burger;



// var burger = {
//   selectAll: function(cb) {
//     console.log('test');
//     orm.selectAll("burger_table", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(cols, vals, cb) {
//     orm.insertOne("burger_table", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(objColVals, condition, cb) {
//     orm.updateOne("burger_table", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };