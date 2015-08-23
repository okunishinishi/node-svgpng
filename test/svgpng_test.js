/**
 * Test case for svgpng.
 * Runs with nodeunit.
 */

var svgpng = require('../lib/svgpng.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Svgpng'] = function (test) {
    var src = __dirname + "/../docs/mockups/mockup-svg.svg",
        dest = __dirname + '/../tmp/test-png.png';
    svgpng(src, dest, function (err) {
        test.ifError(err);
        test.done();
    });
};

