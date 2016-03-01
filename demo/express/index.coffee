http = require('http')

express = require('express')

app = express()

{div} = dc = require('dcis')

#console.log 'express/index: '+JSON.stringify(dc)

app.get '/', (req, res) ->
  comp = div()
  transport = new HttpTransport(app, '/', req, res)
  comp.publish(transport)

http.createServer(app).listen 8080, ->
  console.log 'Express server listening on port ' + 8080