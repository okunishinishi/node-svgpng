/**
 * @function svgpng
 * @param {string} src - Source svg filename.
 * @param {string} dest - Destination png filename.
 * @param {object} [options] - Optional settings.
 * @param {boolean} [options.silent=false] - No console log.
 * @param {function} callback - Callback when done.
 */

"use strict";
var argx = require('argx'),
    svgpngByConf = require('./svgpng_by_conf');


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

    svgpngByConf(conf, callback);
}


module.exports = svgpng;
