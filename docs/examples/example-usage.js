#!/usr/bin/env/node

var svgpng = require('svgpng');

svgpng(
    'src/foo.svg',
    'dest/foo.png',
    {
        size:{
            width:400,
            height:300
        }
    },
    function(err){
        /*...*/
    }
);
