/**
 * Run phantom js
 * @function runPhantom
 */

'use strict'

const execcli = require('execcli')

/** @lends runPhantom */
function runPhantom (cmdArgs) {
  return execcli('phantomjs', [].concat(cmdArgs), {
    notfound: 'Install phantomjs from http://phantomjs.org/'
  })
}

module.exports = runPhantom
