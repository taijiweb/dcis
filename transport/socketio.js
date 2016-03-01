var SocketioTransport, Transport,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Transport = require('./transport');

SocketioTransport = (function(_super) {
  __extends(SocketioTransport, _super);

  function SocketioTransport() {}

  return SocketioTransport;

})(Transport);
