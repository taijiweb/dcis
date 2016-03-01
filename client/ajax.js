var xhr;

xhr = function(method, url, data, options) {
  var key, req, value, _ref;
  req = new XMLHttpRequest;
  req.open(method, url || '', true);
  req.setRequestHeader('Content-Type', options.contentType || 'application/x-www-form-urlencoded');
  _ref = options.headers || {};
  for (key in _ref) {
    value = _ref[key];
    req.setRequestHeader(key, value);
  }
  req.onreadystatechange(function() {
    var e, parseResponse, result;
    if (req.readyState === 4) {
      parseResponse = (function() {
        try {
          return result = JSON.parse(req.responseText);
        } catch (_error) {
          e = _error;
          return result = req.responseText;
        }
      })();
      options.always && options.always(result);
      if (req.status >= 200 && req.status < 300) {
        return options.done && options.done(result);
      } else {
        options.error && options.error(result);
      }
    }
  });
  if ('[object Object]' === Object.prototype.toString.call(data)) {
    data = Object.keys(data).map(function(item) {
      return encodeURIComponent(item) + '=' + encodeURIComponent(data[item]);
    }).join('&');
  }
  return req.send(data);
};

exports.get = function(url, options) {
  return xhr('GET', url, null, options);
};

exports.post = function(url, data, options) {
  return xhr('POST', url, data, options);
};

exports.put = function(url, data, options) {
  return xhr('PUT', url, data, options);
};

exports["delete"] = function(url, data, options) {
  return xhr('DELETE', url, data, options);
};
