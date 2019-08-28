const port = 3200;
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
const allowCors = require('./cors');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(allowCors);

app.get('/', function (req, res) {
  res.send('Hello Express!');
});

app.listen(port, function () {
  console.log('Example app listening on port 3200!');
});

module.exports = app;
