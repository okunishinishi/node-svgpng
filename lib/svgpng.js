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
async function svgpng (src, dest, options = {}) {
  const args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('[svgpng] Callback is no longer supported. Use promise interface instead.')
  }
  const conf = {
    src,
    dest,
    size: options.size
  }

  return await svgpngByConf(conf, {
    silent: options.silent
  })
}

module.exports = svgpng
