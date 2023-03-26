mysql = require("mysql");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Yogita@123",
    database: "proxy",


})

module.exports = db;