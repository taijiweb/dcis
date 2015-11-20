module.exports = dc = require "domcom"

#console.log 'dcis/index: dc:'+dc

{Component} = dc

# publish the component to the client side
# this method is similar to Component.mount in the client side domcom
Component::publish = (transport) ->
  console.log "published"

# update the component which has been published to the client side
# this method is similar to Component.update in the client side domcom
Component.refresh = (transport) ->
  console.log "refresh"

# update the component from the client side, by pulling the current status from the server
Component.pull = (transport) ->

# push the component status to the server
Component.push = (transport) ->



