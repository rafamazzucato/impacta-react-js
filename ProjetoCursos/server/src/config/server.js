const port = 3200;

//middlewares - singletons: commons js
const bodyParser = require('body-parser');
const express = require('express');

const server = express(); //novo servidor

const allowCors = require('./cors');

//para toda requisição que chegar, use o bodyparser para interpretar chegadsas no formato urlencoded
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json()); //considera o formato json no corpo da requisição
server.use(allowCors);


server.listen(port, function () { 
    console.log(`servidor no ar, na porta ${port}`); //template string (observe a crase)
});

module.exports = server;