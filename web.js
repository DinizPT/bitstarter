var express = require('express');
var app = express();
var fs = require('fs');
var buffer = new Buffer(256);
app.use(express.logger());

var mybuf;

mybuf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send('Hello World q		2iqctq!<br>' mybuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
)};
