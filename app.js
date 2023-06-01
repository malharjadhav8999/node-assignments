// Assignment 1 - Hello World

app = require('express');
express = app()

express.get('/', (req, res) => {
    res.send('Hello World')
})

express.listen(3000, () => {
    console.log('Port 3000 is here......')
})