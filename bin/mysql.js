const mysql = require ('mysql');
require("dotenv").config();
console.log(process.env.DB_BASE);
var connection = mysql.createConnection({
    "user" : process.env.DB_USER,
    "password" : process.env.DB_PASS,
    "database" : process.env.DB_BASE,
    "host" : process.env.DB_HOST,
    queueLimit : 0, // unlimited queueing
    connectionLimit : 0 // unlimited connections 

});

exports.connection = connection;