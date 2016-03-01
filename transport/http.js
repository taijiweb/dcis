var HttpTransport, Transport,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Transport = require('./transport');

HttpTransport = (function(_super) {
  __extends(HttpTransport, _super);

  function HttpTransport(server, path, req, res) {
    this.server = server;
    this.path = path;
    this.req = req;
    this.res = res;
  }

  HttpTransport.prototype.publish = function(component) {
    return res.json(component.publishJson());
  };

  return HttpTransport;

})(Transport);
