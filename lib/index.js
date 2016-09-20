/*
 * Modified the original sources from https://github.com/karma-runner/karma-requirejs for cubbes platform
 */
var pathLib = require('path')

function createPattern (path) {
  return {pattern: path, included: true, served: true, watched: false}
}

var requirejsPath = pathLib.join(pathLib.dirname(require.resolve('cubx-requirejs')),'require.js')

function initRequireJs (files) {
  files.unshift(createPattern(pathLib.join(__dirname, '/adapter.js')))
  files.unshift(createPattern(requirejsPath))
}

initRequireJs.$inject = ['config.files']

module.exports = {
  'framework:cubxrequirejs': ['factory', initRequireJs]
}
