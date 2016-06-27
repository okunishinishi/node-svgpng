/**
 * Test case for svgpng.
 * Runs with mocha.
 */
'use strict'

const svgpng = require('../lib/svgpng.js')
const co = require('co')
const assert = require('assert')

describe('Svgpng', function () {
  this.timeout(40000)
  it('Svgpng', () => co(function * () {
    let src = `${__dirname}/../doc/mocks/mockup-svg.svg`
    let dest = `${__dirname}/../tmp/test-png.png`
    yield svgpng(src, dest)
  }))
})

/* global describe, it */

