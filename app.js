/**
    @Author - Malhar
    @description - Node assignments
*/


// Assignment 1 - Hello World

app = require('express');
express = app()

express.get('/', (req, res) => {
    res.send('Hello World')
})

express.listen(3000, () => {
    console.log('Port 3000 is here......')
})

// Assignment 2 - pass port and env to node server from command line arguments and set those values in server

console.log('argv', process.argv);
const args = process.argv.splice(2);
const env = args[0].split('=')[1];    // env=dev
const port = args[1].split('=')[1]    // port=3000


// Assignment 3 - Add CORS to your nodejs app and integrate mysql

// adding cors to system
var cors = require('cors');
app.use(cors());


express.listen(port, () => {
    console.log(`Port ${port} is here......`)
})
