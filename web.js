var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
  buf = new Buffer(256);
  buf = fs.readFileSync('123.HTML');

var str = buf.toString()

var sss='olololololol'
app.get('/', function(request, response) {
  response.send(sss);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
