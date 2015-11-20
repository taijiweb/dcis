var app, dc, div, express, http;

http = require('http');

express = require('express');

app = express();

div = (dc = require('dcis')).div;

console.log('express/index: ' + JSON.stringify(dc));

app.get('/', function(req, res) {
  var comp;
  comp = div();
  comp.publish(res);
  return res.send("hello world");
});

http.createServer(app).listen(8080, function() {
  return console.log('Express server listening on port ' + 8080);
});
