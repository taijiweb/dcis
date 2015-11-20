x = see 1

text(onchange: (event, component) ->
  x @value
  x.push()
    .then -> console.log(x); alert(x)
    .catch -> alert('some errors happen')
)