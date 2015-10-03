/**
 * Test case for svgpngByConf.
 * Runs with nodeunit.
 */

var svgpngByConf = require('../lib/svgpng_by_conf.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Svgpng by conf'] = function (test) {
    svgpngByConf([
        {
            src: __dirname + "/../doc/mocks/mockup-svg.svg",
            dest: __dirname + '/../tmp/test-png.png',
            size: {
                width: 200,
                height: 200
            }
        }
    ]);
    test.done();
};

