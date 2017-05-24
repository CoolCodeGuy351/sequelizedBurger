var connection = require("../config/connection.js");

// Import MySQL connection.
var orm = {

    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    insertOne: function(tableName, column, value, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, column, value], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    },
    updateOne: function(tableName, colVal, boolean, colName, condition, cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(queryString, [tableName, colVal, boolean, colName, condition], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}


module.exports = orm;



// var orm = {

//     selectAll: function(tableName, cb) {
//         var queryString = "SELECT * FROM ??";
//         connection.query(queryString, [tableName], function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         })
//     },
//     insertOne: function(tableName, burName, cb) {
//         var queryString = "INSERT INTO ?? VALUES ( ?? , false)";
//         connection.query(queryString, [tableName, burName ], function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         })

//     },
//     updateOne: function(tableName, colVal, boolean, colName, condition, cb) {
//         var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
//         connection.query(queryString, [tableName, colVal, boolean, colName, condition], function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         })
//     }
// }