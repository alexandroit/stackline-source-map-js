var util = require('../lib/util');
var original = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;

exports['test URL fields preserve historical parsing'] = function (assert) {
  var values = ['http://user:pass@host.example:8080/path?q=a', '//host', 'relative',
    'data:text/plain,a', 'http://', '//host:abc/path', '//host\n', '//:10', '//a:b@x/y'];
  var chars = 'abc012:/@.-_?+\n';
  var seed = 17;
  for (var i = 0; i < 3000; i++) {
    var value = i % 2 ? '//' : 'http://';
    for (var j = 0; j < 12; j++) { seed = (seed * 16807) % 2147483647; value += chars.charAt(seed % chars.length); }
    values.push(value);
  }
  values.forEach(function (value) {
    var m = original.exec(value);
    var expected = m ? { scheme: m[1], auth: m[2], host: m[3], port: m[4], path: m[5] } : null;
    assert.deepEqual(util.urlParse(value), expected, value);
  });
};

exports['test long malformed URLs and joins are bounded'] = function (assert) {
  var long = new Array(100001).join('-');
  assert.equal(util.urlParse('//' + long + '\n'), null);
  assert.equal(util.isAbsolute('a://' + long + '\n'), false);
  assert.equal(util.join(new Array(100001).join('/'), 'a'), '///a');
  var data = 'data:a,' + new Array(100001).join('a,') + 'z';
  assert.equal(util.join('root', data), data);
};
