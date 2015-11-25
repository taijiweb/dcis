var ComponentFromServer,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ComponentFromServer = (function(_super) {
  __extends(ComponentFromServer, _super);

  function ComponentFromServer(url, json) {
    this.url = url;
    this.json = json;
  }

  ComponentFromServer.prototype.getContentComponent = function() {};

  return ComponentFromServer;

})(Component);
