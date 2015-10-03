/**
 * @file Phantom js script for svgpng.
 */

"use strict";


var page = require('webpage').create(),
    system = require('system');

var async = require('async');
var conf = require(system.args[1]);

async.eachSeries([].concat(conf), function (conf, callback) {
    var src = conf.src,
        dest = conf.dest,
        size = conf.size || {},
        silent = !!conf.silent;

    page.viewportSize = {
        width: size.width || 480,
        height: size.height || 800
    };

    page.open(src, function (status) {
        if (status !== 'success') {
            callback(new Error('FAIL to load :' + src));
            phantom.exit();
        }
        page.render(dest);
        if (!silent) {
            console.log('File generated: ', dest);
        }
        callback(null);
    });
}, function (err) {
    if (err && !silent) {
        console.error(err);
    }
    var exitCode = err ? 1 : 0;
    phantom.exit(exitCode);
});
