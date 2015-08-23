/**
 * Node.js module to convert SVG image into PNG image.
 * @module svgpng
 * @version 1.0.0
 */

"use strict";

var svgpng = require('./svgpng').bind(this),
    svgpngByConf = require('./svgpng_by_conf');

svgpng.byConf = svgpngByConf;

module.exports = svgpng;
