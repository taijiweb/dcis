var console;

exports.patchGlobal = function(globalCache) {
  if (globalCache == null) {
    globalCache = {};
  }
  globalCache.console = console;
  if (typeof document !== 'undefined') {
    globalCache.document = document;
  }
  if (typeof window !== 'undefined') {
    globalCache.document = document;
  }
  return globalCache;
};

console = {
  log: function() {},
  info: function() {},
  warn: function() {},
  error: function() {},
  dir: function() {},
  time: function() {},
  timeEnd: function() {},
  trace: function() {},
  assert: function() {}
};

epxorts.patchObject = function(obj, objCache) {
  if (objCache == null) {
    objCache = {};
  }
  return objCache = {};
};
