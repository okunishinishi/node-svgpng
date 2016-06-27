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
const co = require('co')
const fs = require('fs')
const runPhantom = require('./run_phantom')

const script = require.resolve('../assets/phantom_scripts/svgpng.phantom.js')

const filesToClean = []

let existsAsync = (filename) => new Promise((resolve) =>
  fs.exists(filename, (exists) => resolve(exists))
)

let writeFileAsync = (filename, content) => new Promise((resolve, reject) =>
  fs.writeFile(filename, content, (err) => err ? reject(err) : resolve())
)

let unlinkAsync = (filename) => new Promise((resolve, reject) =>
  fs.unlink(filename, (err) => err ? reject(err) : resolve())
)

let cleanup = () => {
  while (filesToClean.length) {
    let filename = filesToClean.shift()
    if (fs.existsSync(filename)) {
      fs.unlinkSync(filename)
    }
  }
}

/** @lends svgpngByConf */
function svgpngByConf (conf, options = {}) {
  let args = argx(arguments)
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

  let confFile = path.resolve(
    process.cwd(),
    '.svgpng.' + new Date().getTime() + '.json'
  )
  return co(function * () {
    for (let { src } of conf) {
      let exists = yield existsAsync(src)
      if (!exists) {
        throw new Error(`File not found: ${src}`)
      }
    }
    yield writeFileAsync(confFile, JSON.stringify(conf))
    yield runPhantom([ script, confFile ])
    yield unlinkAsync(confFile)
    filesToClean.push(confFile)
  }).catch((err) => {
    cleanup()
    return Promise.reject(err)
  })
}

process.on('exit', () => {
  cleanup()
})

module.exports = svgpngByConf
