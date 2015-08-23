/**
 * Convert SVG image into PNG.
 * @module svgpng
 * @version 1.0.1
 */

"use strict";

var svgpng = require('./svgpng').bind(this),
    svgpngByConf = require('./svgpng_by_conf');

svgpng.byConf = svgpngByConf;

module.exports = svgpng;
