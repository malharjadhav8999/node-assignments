/**
    @Author - Malhar
    @description - This file includes database connections and related functions
*/

// get the client
const mysql = require('mysql2/promise');

// create the connection to database using createPool
// createPool improves latency of quries by avoiding all overheads comes with establishing a new connection
const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee_db'
});

// mysqlPool.query('SELECT 1')
//     .then(data => console.log(data))
//     .catch(err => console.log('db connection failed. \n' + err))

module.exports = mysqlPool;