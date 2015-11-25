{task, from, dest, CombineStream, logTime} = require("gulp-helper")

coffee = require ('gulp-coffee')

compileCoffee  = (fromFiles, toFolder) ->
  from(fromFiles, {cache:'coffee'}).pipelog(coffee({bare: true})).pipe(dest(toFolder))

task 'coffee', (cb) ->
  streamList = []

  streamList.push compileCoffee('./src/**/*.coffee', './lib')
  # below is just for who prefer to reading javascript
  streamList.push compileCoffee('./test/**/*.coffee', './test-build')
  streamList.push compileCoffee('./demo/**/*.coffee', './dist-build')

  combineStream = new CombineStream(streamList)
  #combineStream.end -> logTime('finish coffee')

  combineStream
