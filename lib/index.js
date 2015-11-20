var Component, dc;

module.exports = dc = require("domcom");

Component = dc.Component;

Component.prototype.publish = function() {
  return console.log("published");
};
