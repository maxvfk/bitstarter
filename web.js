var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
  buf = new Buffer(256);
  buf = fs.readFileSync('index.html');

var str = buf.toString();

//var sss='olololololol';
app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
