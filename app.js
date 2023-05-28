// Assignment 1 - Hello World

app = require('express');
express = app()

express.get('/', (req, res) => {
    res.send('Hello World')
})

express.listen(3000, () => {
    console.log('Port 3000 is here......')
})


// Assignment 2 - Passing port and env from command line to node server

console.log('argv', process.argv);
const args = process.argv.splice(2);
const env = args[0].split('=')[1];    // env=dev
const port = args[1].split('=')[1]    // port=3000