/**
 * Test for svgpng bin.
 * Runs with mocha.
 */

'use strict'

const bin = require.resolve('../bin/svgpng')
const assert = require('assert')
const execcli = require('execcli')

it('Svgpng', async () => {
  const src = __dirname + '/../doc/mocks/mockup-svg.svg'
  const dest = __dirname + '/../tmp/test-by-bin-png.png'
  await execcli(bin, [src, dest, { width: 20, height: 40 }])
})

/* global it */
