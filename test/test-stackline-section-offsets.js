var assert = require('assert');
var api = require('../source-map');

function indexed(line, column) {
  return { version: 3, sections: [{ offset: { line: line, column: column },
    map: { version: 3, names: [], sources: ['input.js'], sourcesContent: ['second'], mappings: 'AAAA' } }] };
}

exports['test invalid section offsets are rejected before iteration'] = function () {
  [Infinity, -Infinity, NaN, -1, 0.5, '1', null, 9007199254740991].forEach(function (value) {
    assert.throws(function () { return new api.SourceMapConsumer(indexed(value, 0)); }, TypeError);
    assert.throws(function () { return new api.SourceMapConsumer(indexed(0, value)); }, TypeError);
  });
};

exports['test huge finite mapping cannot pad beyond generated source'] = function () {
  var consumer = new api.SourceMapConsumer(indexed(1000000000, 0));
  assert.throws(function () { api.SourceNode.fromStringWithSourceMap('x', consumer); }, RangeError);
};

exports['test valid indexed map preserves the generated code'] = function () {
  var consumer = new api.SourceMapConsumer(indexed(1, 0));
  assert.equal(api.SourceNode.fromStringWithSourceMap('first\nsecond', consumer).toString(), 'first\nsecond');
};

exports['test custom consumers cannot inject invalid generated lines'] = function () {
  [Infinity, NaN, -1, 0, 1.5, 1000000000].forEach(function (line) {
    var consumer = { eachMapping: function (callback) { callback({ generatedLine: line, generatedColumn: 0 }); }, sources: [] };
    assert.throws(function () { api.SourceNode.fromStringWithSourceMap('x', consumer); }, RangeError);
  });
};
