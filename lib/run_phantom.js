/**
 * Run phantom js
 * @function runPhantom
 */

"use strict";

var argx = require('argx'),
    hasbin = require('hasbin'),
    execcli = require('execcli');

/** @lends runPhantom */
function runPhantom(cmdArgs, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;

    hasbin('phantomjs', function (hasbin) {
        if (!hasbin) {
            callback(new Error('`phantomjs` not found.'));
            return;
        }
        execcli('phantomjs', [].concat(cmdArgs), {}, callback);
    });
}

module.exports = runPhantom;