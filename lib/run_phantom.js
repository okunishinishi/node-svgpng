/**
 * Run phantom js
 * @function runPhantom
 */

'use strict'

const execcli = require('execcli')
const phantomjs = require('phantomjs-prebuilt')

/** @lends runPhantom */
function runPhantom (cmdArgs) {
  return execcli(phantomjs.path, [].concat(cmdArgs), {
    notfound: 'Install phantomjs from http://phantomjs.org/'
  })
}

module.exports = runPhantom
