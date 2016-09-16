module.exports = dc = require "domcom"

#console.log 'dcis/index: dc:'+dc

{Component} = dc

# publish the component to the client side
# this method is similar to Component.mount in the client side domcom
Component::publish = (transport) ->
  console.log "published"

# update the component which has been published to the client side
# this method is similar to Component.update in the client side domcom
Component::refresh = (transport) ->
  console.log "refresh"

# update the component from the client side, by pulling the current status from the server
Component::pull = (transport) ->

# push the component status to the server
Component::push = (transport) ->

Text::push = (transport) ->

Tag::processAttrs = (attrs) ->

  {className, style, props} = @

  for key, value of attrs

    if key=='style'
      styles = styleFrom(value)
      for key, value of styles
        @setProp(key, value, style, 'Style')

    else if key=='class' || key=='className'
      className.extend(value)

      # events and its handler
    else if key[..1]=='on'
      if !value then continue
      else if typeof value == 'function'
        @bindOne(key, value)
      else
        v0 = value[0]
        if v0=='before' || v0=='after'
          for v in value[1...]
            # value is an array of handlers
            @bindOne(key, v, v0=='before')
        else
          for v in value
            # value is an array of handlers
            @bindOne(key, v)

    else if key[0]=='$'
      # $directiveName: generator arguments list
      generator = directiveRegistry[key]
      if value instanceof Array then handler = generator.apply(null, value)
      else handler = generator.apply(null, [value])
      handler(@)

    else @setProp(key, value, props, 'Props')

  @



