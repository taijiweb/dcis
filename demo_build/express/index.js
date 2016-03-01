var app, dc, div, express, http;

http = require('http');

express = require('express');

app = express();

div = (dc = require('dcis')).div;

app.get('/', function(req, res) {
  var comp, transport;
  comp = div();
  transport = new HttpTransport(app, '/', req, res);
  return comp.publish(transport);
});

http.createServer(app).listen(8080, function() {
  return console.log('Express server listening on port ' + 8080);
});
