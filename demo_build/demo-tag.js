div({
  onclick: function(event, component) {
    this.className.addClass('a');
    see(1);
    see(this.className);
    return component.update();
  }
});
