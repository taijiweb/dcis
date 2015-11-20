xhr = (method, url, data, options) ->
  req = new XMLHttpRequest

  req.open method, url or '', true

  req.setRequestHeader 'Content-Type', options.contentType or 'application/x-www-form-urlencoded'

  for key, value of options.headers || {}
    req.setRequestHeader(key, value)

  req.onreadystatechange ->
    if req.readyState == 4 # DONE
      parseResponse =
        try result = JSON.parse(req.responseText)
        catch e then result = req.responseText

      options.always and options.always result

      if req.status >= 200 and req.status < 300
        return options.done and options.done result
      else options.error and options.error result

    return

  if '[object Object]' == Object::toString.call(data)
    data = Object.keys(data).map(
        (item) -> encodeURIComponent(item) + '=' + encodeURIComponent(data[item])
      ).join '&'

  req.send data

exports.get = (url, options) -> xhr 'GET', url, null, options
exports.post = (url, data, options) -> xhr 'POST', url, data, options
exports.put = (url, data, options) -> xhr 'PUT', url, data, options
exports.delete = (url, data, options) -> xhr 'DELETE', url, data, options

