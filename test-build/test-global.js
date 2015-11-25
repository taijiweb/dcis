var expect, idescribe, iit, ndescribe, nit, _ref;

_ref = require('bdd-test-helper'), expect = _ref.expect, iit = _ref.iit, idescribe = _ref.idescribe, nit = _ref.nit, ndescribe = _ref.ndescribe;

global.x = 1;

describe('add global', function() {
  return it('should add global', function() {
    return expect(x).to.equal(1);
  });
});
