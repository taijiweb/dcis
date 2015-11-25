{expect, iit, idescribe, nit, ndescribe} = require('bdd-test-helper')

#patchGlobal = require "../lib/add-global"
#
#globalCache = patchGlobal(global)

global.x = 1

describe 'add global', ->
  it 'should add global', ->
    expect(x).to.equal 1


