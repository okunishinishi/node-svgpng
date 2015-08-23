/**
 * @function svgpng
 * @param {string} src - Source svg filename.
 * @param {string} dest - Destination png filename.
 * @param {object} opitons - Optional settings.
 * @param {function} callback - Callback when done.
 */

"use strict";
var argx = require('argx'),
    async = require('async'),
    path = require('path'),
    fs = require('fs'),
    runPhantom = require('./run_phantom');

var script = require.resolve('../assets/phantom_scripts/svgpng.phantom.js');

/** @lends svgpng */
function svgpng(src, dest, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};
    src = args.shift('string');
    dest = args.shift('string');

    var conf = {
        src: src,
        dest: dest,
        size: options.size
    };
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

module.exports = svgpng;
