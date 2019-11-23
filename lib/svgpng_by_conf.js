/**
 * @function svgpngByConf
 * @param {object|object[]} conf - Configuration.
 * @param {object} [options] - Optional settings.
 * @param {boolean} [options.silent=false] - No console log.
 * @returns {Promise}
 */

'use strict'

const argx = require('argx')
const path = require('path')
const amkdirp = require('amkdirp')
const sharp = require('sharp')
const { unlinkAsync, writeFileAsync, statAsync, readFileAsync } = require('asfs')

const existsAsync = async (filename) =>
  await statAsync(filename).then(() => true).catch(() => false)

/** @lends svgpngByConf */
async function svgpngByConf (conf, options = {}) {
  const args = argx(arguments)
  conf = args.shift('array|object') || []

  if (args.pop('function')) {
    throw new Error('[svgpng] Callback is no longer supported. Use promise interface instead.')
  }
  options = args.pop('object') || {}

  conf = [].concat(conf).map((conf) => {
    conf.silent = !!(conf.silent || options.silent)
    conf.src = path.resolve(conf.src)
    conf.dest = path.resolve(conf.dest)
    return conf
  })

  for (const { src, dest, size, fit = 'inside', } of conf) {
    const exists = await existsAsync(src)
    if (!exists) {
      throw new Error(`File not found: ${src}`)
    }
    const { width, height } = size || {}
    await amkdirp(path.dirname(dest))
    const content = await readFileAsync(src)
    await sharp(content)
      .resize({
        fit,
        height,
        width,
      })
      .png()
      .toFile(dest)
  }
}

module.exports = svgpngByConf

