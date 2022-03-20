const mysql = require('mysql');

//creating a connection to MySql DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'expressjs1',
    database: 'reg_form'
})




module.exports = db;
