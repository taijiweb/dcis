var app, dc, div, express, http;

http = require('http');

express = require('express');

app = express();

div = (dc = require('dcis')).div;

app.get('/', function(req, res) {
  var comp, transport;
  comp = div();
  transport = new HttpTransport(req, res);
  comp.publish(transport);
  return res.send("hello world");
});

http.createServer(app).listen(8080, function() {
  return console.log('Express server listening on port ' + 8080);
});
