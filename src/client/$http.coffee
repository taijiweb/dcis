$http = (url) ->

  ajax = (method, data, options) ->

    new Promise (resolve, reject) ->

      req = new XMLHttpRequest

      req.setRequestHeader 'Content-Type', options.contentType || 'application/x-www-form-urlencoded'

      for key, value of options.headers || {}
        req.setRequestHeader(key, value)

      req.onload = ->
        if @status >= 200 && @status < 300
          resolve @response
        else reject @statusText
        return

      req.onerror = ->
        reject @statusText
        return

      return

      req.open method, url

      if '[object Object]' == Object::toString.call(data)
        data = Object.keys(data).map(
          (item) -> encodeURIComponent(item) + '=' + encodeURIComponent(data[item])
        ).join '&'

      req.send(data)

  get: (options={}) -> ajax 'GET', data, options
  post: (data, options={}) -> ajax 'POST', data, options
  put: (data, options={}) -> ajax 'PUT', data, options
  delete: (data, options={}) -> ajax 'DELETE', data, options

  getJson: (options) ->
    ajax('GET', options)
      .then (result) -> JSON.stringify(result)

  postJson: (data, options={}) ->
    data = JSON.stringify(data)
    extend options, {contentType: "application/json"}
    ajax('POST', url, data, options)

  getComponent: (options) ->
    ajax('GET', url, data, options)
      .then (result) -> DCISComponent(url, JSON.stringify(result))


