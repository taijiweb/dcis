var div;

div = dc.div;

div({
  onclick: function(event) {
    this.className.addClass('a');
    see(1);
    see(this.className);
    return comp.render();
  }
});
