{domValue, List, Tag, Text, Comment, Html, Nothing, TransformComponent} = dc = require "domcom"

TransformComponent::html = ->
  if @valid then return @_html
  content = @getContentCompnent()
  content.html()

childrenHtml = (children) ->
  htmlList = []
  for child in children
    htmlList.push child.html()
  htmlList.join ""

List::html = -> childrenHtml(@children)

Nothing:: html = -> ""

Text::html = -> domValue(@text)

Html::html = -> @transform and @transform(domValue(@text)) or domValue(@text)

Commment::html = -> "<-- #{domValue(@text)} -->"

Tag::html = ->
  propHtml = []
  for prop, value in @props
    propHtml.push prop+"="+domValue(value)

  styleHtml = []
  for prop, value in @styles
    styleHtml.push prop+":"+domValue(value)
  styleHtml.length and propHtml.push "{"+styleHtml.join('; ')+"}"

  if propHtml
    propHtml = " "+propHtml.join(" ")
  else propHtml = ""



  "<#{@tagName}"+properties.join(" ")+">"+childrenHtml(@children)+"</{@tagName}>"


