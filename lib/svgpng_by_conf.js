/**
 * @function svgpngByConf
 * @param {object|object[]} conf - Configuration.
 * @param {object} [options] - Optional settings.
 * @param {boolean} [options.silent=false] - No console log.
 * @param {function} callback - Callback when done.
 */

"use strict";

var argx = require('argx'),
    path = require('path'),
    async = require('async'),
    fs = require('fs'),
    runPhantom = require('./run_phantom');

var script = require.resolve('../assets/phantom_scripts/svgpng.phantom.js');


var filesToClean = [];

/** @lends svgpngByConf */
function svgpngByConf(conf, options, callback) {
    var args = argx(arguments);
    conf = args.shift('array|object') || [];
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};

    conf = [].concat(conf).map(function (conf) {
        conf.silent = !!(conf.silent || options.silent);
        conf.src = path.resolve(conf.src);
        conf.dest = path.resolve(conf.dest);
        return conf;
    });

    var confFile = path.resolve(
        process.cwd(),
        '.svgpng.' + new Date().getTime() + '.json'
    );
    async.series([
        function (callback) {
            async.eachSeries(conf, function (conf) {
                fs.exists(conf.src, function (exists) {
                    if (exists) {
                        callback(null);
                    } else {
                        callback(new Error('File not found: ' + src));
                    }
                });
            }, callback);
        },
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
    filesToClean.push(confFile);

}

process.on('exit', function () {
    filesToClean.forEach(function (confFile) {
        if (fs.existsSync(confFile)) {
            fs.unlinkSync(confFile);
        }
    });
});

module.exports = svgpngByConf;