/**
 * Test case for runPhantom.
 * Runs with nodeunit.
 */

var runPhantom = require('../lib/run_phantom.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};


exports['Run phantom'] = function (test) {
    runPhantom('-v', function (err) {
        test.ifError(err);
        test.done();
    });
};

