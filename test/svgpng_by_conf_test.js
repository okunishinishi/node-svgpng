/**
 * Test case for svgpngByConf.
 * Runs with mocha.
 */
'use strict'

const svgpngByConf = require('../lib/svgpng_by_conf.js')
const assert = require('assert')
const co = require('co')

it('Svgpng by conf', () => co(function * () {
  yield svgpngByConf([
    {
      src: `${__dirname}/../doc/mocks/mockup-svg.svg`,
      dest: `${__dirname}/../tmp/test-png.png`,
      size: {
        width: 200,
        height: 200
      }
    }
  ])
}))

/* global it */
