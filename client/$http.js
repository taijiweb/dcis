var $http;

$http = function(url) {
  var ajax;
  ajax = function(method, data, options) {
    return new Promise(function(resolve, reject) {
      var key, req, value, _ref;
      req = new XMLHttpRequest;
      req.setRequestHeader('Content-Type', options.contentType || 'application/x-www-form-urlencoded');
      _ref = options.headers || {};
      for (key in _ref) {
        value = _ref[key];
        req.setRequestHeader(key, value);
      }
      req.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(this.response);
        } else {
          reject(this.statusText);
        }
      };
      req.onerror = function() {
        reject(this.statusText);
      };
      return;
      req.open(method, url);
      if ('[object Object]' === Object.prototype.toString.call(data)) {
        data = Object.keys(data).map(function(item) {
          return encodeURIComponent(item) + '=' + encodeURIComponent(data[item]);
        }).join('&');
      }
      return req.send(data);
    });
  };
  return {
    get: function(options) {
      if (options == null) {
        options = {};
      }
      return ajax('GET', data, options);
    },
    post: function(data, options) {
      if (options == null) {
        options = {};
      }
      return ajax('POST', data, options);
    },
    put: function(data, options) {
      if (options == null) {
        options = {};
      }
      return ajax('PUT', data, options);
    },
    "delete": function(data, options) {
      if (options == null) {
        options = {};
      }
      return ajax('DELETE', data, options);
    },
    getJson: function(options) {
      return ajax('GET', options).then(function(result) {
        return JSON.stringify(result);
      });
    },
    postJson: function(data, options) {
      if (options == null) {
        options = {};
      }
      data = JSON.stringify(data);
      extend(options, {
        contentType: "application/json"
      });
      return ajax('POST', url, data, options);
    },
    getComponent: function(options) {
      return ajax('GET', url, data, options).then(function(result) {
        return DCISComponent(url, JSON.stringify(result));
      });
    }
  };
};
