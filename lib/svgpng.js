/**
 * @function svgpng
 * @param {string} src - Source svg filename.
 * @param {string} dest - Destination png filename.
 * @param {object} [options] - Optional settings.
 * @param {boolean} [options.silent=false] - No console log.
 * @returns {Promise}
 */

'use strict'
const argx = require('argx')
const svgpngByConf = require('./svgpng_by_conf')

/** @lends svgpng */
function svgpng (src, dest, options = {}) {
  let args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('[svgpng] Callback is no longer supported. Use promise interface instead.')
  }
  let conf = {
    src,
    dest,
    size: options.size
  }

  return svgpngByConf(conf, {
    silent: options.silent
  })
}

module.exports = svgpng
