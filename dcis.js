var Component, dc;

module.exports = dc = require("domcom");

Component = dc.Component;

Component.prototype.publish = function(transport) {
  return console.log("published");
};

Component.prototype.refresh = function(transport) {
  return console.log("refresh");
};

Component.prototype.pull = function(transport) {};

Component.prototype.push = function(transport) {};

Text.prototype.push = function(transport) {};

Tag.prototype.processAttrs = function(attrs) {
  var className, generator, handler, key, props, style, styles, v, v0, value, _i, _j, _len, _len1, _ref;
  className = this.className, style = this.style, props = this.props;
  for (key in attrs) {
    value = attrs[key];
    if (key === 'style') {
      styles = styleFrom(value);
      for (key in styles) {
        value = styles[key];
        this.setProp(key, value, style, 'Style');
      }
    } else if (key === 'class' || key === 'className') {
      className.extend(value);
    } else if (key.slice(0, 2) === 'on') {
      if (!value) {
        continue;
      } else if (typeof value === 'function') {
        this.bindOne(key, value);
      } else {
        v0 = value[0];
        if (v0 === 'before' || v0 === 'after') {
          _ref = value.slice(1);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            v = _ref[_i];
            this.bindOne(key, v, v0 === 'before');
          }
        } else {
          for (_j = 0, _len1 = value.length; _j < _len1; _j++) {
            v = value[_j];
            this.bindOne(key, v);
          }
        }
      }
    } else if (key[0] === '$') {
      generator = directiveRegistry[key];
      if (value instanceof Array) {
        handler = generator.apply(null, value);
      } else {
        handler = generator.apply(null, [value]);
      }
      handler(this);
    } else {
      this.setProp(key, value, props, 'Props');
    }
  }
  return this;
};
