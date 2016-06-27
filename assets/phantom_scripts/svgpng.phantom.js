/**
 * @file Phantom js script for svgpng.
 */
console.log('!!!!!!!')
"use strict"

var page = require('webpage').create()
var system = require('system')

var conf = [].concat(require(system.args[ 1 ]))

function convert (src, dest, size, callback) {
  page.viewportSize = {
    width: size.width || 480,
    height: size.height || 800
  }

  page.open(src, function (status) {
    if (status !== 'success') {
      callback(new Error('FAIL to load :' + src))
      phantom.exit()
      return
    }
    page.render(dest)
    console.log('File generated: ', dest)
    callback(null)
  })
}

function tick (callback) {
  let converting = conf.shift()
  if (converting === 0) {
    callback()
    return
  }
  convert(converting.src, converting.dest, converting.size || {}, function (err) {
    if (err) {
      callback(err)
      return
    }
    tick()
  })
}

console.log('Start converting...')
tick(function (err) {
  var exitCode = err ? 1 : 0
  if (err) {
    console.error(err)
  } else {
    console.log('...converting done!')
  }
  phantom.exit(exitCode)
})
