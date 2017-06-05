#!/usr/bin/env/node

const svgpng = require('svgpng')

;(async () => {
  await svgpng.byConf([
    {
      src: 'src/foo.svg',
      dest: 'dest/foo.png',
      size: {
        width: 400,
        height: 300
      }
    },
    {
      src: 'src/bar.svg',
      dest: 'dest/bar.png',
      size: {
        width: 100,
        height: 200
      }
    }
  ])
})()

