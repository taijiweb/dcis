module.exports = dc = require "domcom"

#console.log 'dcis/index: dc:'+dc

{Component} = dc

Component::publish = (transport) ->
  console.log "published"

Component.refresh = (transport) ->
  console.log "refresh"