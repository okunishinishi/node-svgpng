/**
 * Test for svgpng bin.
 * Runs with nodeunit.
 */

"use strict";


var bin = require.resolve('../bin/svgpng'),
    execcli = require('execcli');

exports['Svgpng'] = function (test) {
    var src = __dirname + "/../docs/mockups/mockup-svg.svg",
        dest = __dirname + '/../tmp/test-by-bin-png.png';
    execcli(bin, [src, dest, {width:20,height:40}], function(err){
        test.done();
    });
};
