Transport = require './transport'

class HttpTransport extends Transport
  constructor: (@server, @path, @req, @res) ->

  publish: (component) ->
    res.json(component.publishJson())