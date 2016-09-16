{div} = dc
div({
  onclick:(event) ->
    this.className.addClass('a')
    see(1)
    see(this.className)
    comp.render()
})