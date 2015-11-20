div({
  onclick:(event, component) ->
    @className.addClass('a')
    see(1)
    see @className
    component.update()
})