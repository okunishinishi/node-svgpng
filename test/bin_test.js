/**
 * Test for svgpng bin.
 * Runs with mocha.
 */

'use strict'

const bin = require.resolve('../bin/svgpng')
const co = require('co')
const assert = require('assert')
const execcli = require('execcli')

it('Svgpng', () => co(function * () {
  let src = __dirname + '/../doc/mocks/mockup-svg.svg'
  let dest = __dirname + '/../tmp/test-by-bin-png.png'
  yield execcli(bin, [ src, dest, { width: 20, height: 40 } ])
}))

/* global it */
