/**
 * Test case for runPhantom.
 * Runs with mocha.
 */
'use strict'

const runPhantom = require('../lib/run_phantom.js')
const assert = require('assert')
const co = require('co')

it('Run phantom', () => co(function * () {
  yield runPhantom('-v')
}))

/* global it */

