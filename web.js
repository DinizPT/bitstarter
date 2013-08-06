var express = require('express');
var app = express();
var fs = require('fs');
var buffer = new Buffer(256);
app.use(express.logger());

fs.readFile('index.html', funciton (err, buffer); 

app.get('/', function(request, response) {
  response.send('Hello World q		2iqctq!');
  response.send(buffer.toString("utf-8");	
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
)}
