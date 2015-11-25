exports.patchGlobal = (globalCache={}) ->
  globalCache.console = console

  if typeof document != 'undefined'
    globalCache.document = document
  if typeof window != 'undefined'
    globalCache.document = document

  globalCache

console = {
  log: ->
  info: ->
  warn: ->
  error: ->
  dir: ->
  time: ->
  timeEnd: ->
  trace: ->
  assert: ->
}

epxorts.patchObject = (obj, objCache={}) ->
  objCache = {}

