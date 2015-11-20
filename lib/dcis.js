var Component, dc;

module.exports = dc = require("domcom");

Component = dc.Component;

Component.prototype.publish = function(transport) {
  return console.log("published");
};

Component.refresh = function(transport) {
  return console.log("refresh");
};
