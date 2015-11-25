var x;

x = see(1);

text({
  onchange: function(event, component) {
    x(this.value);
    return x.push().then(function() {
      console.log(x);
      return alert(x);
    })["catch"](function() {
      return alert('some errors happen');
    });
  }
});
