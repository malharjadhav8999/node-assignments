/**
 @Author - Malhar
 @description - Node assignments
 */


// Assignment 1 - Hello World

let app = require('express');
let express = app();

// async await request handlers are used which can't be handled in express v4
// they are handled in express v5 beta so using express-async-erros package for
// handling those errors globally
require('express-async-errors')

const db = require('./models/index')

employeeRoutes = require('./controllers/employee.controller')

express.use('/api/employees', employeeRoutes);

// middleware
express.use((err, req, res, next) => {
    console.log(err)
    // if we do not provide any error status code in catch then it'll consider 500
    res.status(err.status || 500).send('Something went wrong !')
})

// adding cors to system
var cors = require('cors');
express.use(cors());

express.get('/', (req, res) => {
    res.send('Hello World')
})


// Assignment 2 - pass port and env to node server from command line arguments and set those values in server

console.log('argv', process.argv);
const args = process.argv.splice(2);
const env = args[0]?.split('=')[1] || 'dev';    // env=dev
const port = args[1]?.split('=')[1] || '3000'   // port=3000


// Assignment 3 - Add CORS to your nodejs app and integrate mysql



// setting up my sql connection

// const db = require('./models/index')

// employeeRoutes = require('./controllers/employee.controller')

// express.use('/api/employees', employeeRoutes);

// console.log('connection', connection)

// express.get('/', (req, res) => {
//     res.send('list of employees')
// })

// db.query('SELECT 1')
//     .then(() => {
//         console.log('db connection succeeded.')
//         express.listen(port, () => {
//             console.log(`Port ${port} is here......`)
//         })
//     })
//     .catch(err => console.log('db connection failed. \n' + err))




express.listen(port, () => {
    console.log(`Port ${port} is here......`)
})



//assignment-4
