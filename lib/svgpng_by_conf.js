/**
 * @function svgpngByConf
 * @param {object|object[]} conf - Configuration.
 * @param {function} callback - Callback when done.
 */

"use strict";

var argx = require('argx'),
    path = require('path'),
    async = require('async'),
    fs = require('fs'),
    runPhantom = require('./run_phantom');

var script = require.resolve('../assets/phantom_scripts/svgpng.phantom.js');


/** @lends svgpngByConf */
function svgpngByConf(conf, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;

    var confFile = path.resolve(
        process.cwd(),
        '.svgpng.' + new Date().getTime() + '.json'
    );
    async.series([
        function (callback) {
            fs.writeFile(confFile, JSON.stringify(conf), callback);
        },
        function (callback) {
            runPhantom([script, confFile], callback);
        },
        function (callback) {
            callback(null);
        }
    ], function (err) {
        fs.unlink(confFile, function () {
            callback(err);
        });
    });
}

module.exports = svgpngByConf;