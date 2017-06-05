#!/usr/bin/env/node

const svgpng = require('svgpng')

;(async () => {
  await svgpng(
    'src/foo.svg',
    'dest/foo.png',
    {
      size: {
        width: 400,
        height: 300
      }
    }
  )
})()
