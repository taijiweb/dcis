{extend} = module.exports = dc = require "./dcis"

#console.log 'dcis/index: dc:'+dc

extend dc,
  require './transport'

