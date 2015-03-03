/* global StackFrame: false, ErrorStackParser: false, CapturedExceptions: false */
describe('ErrorStackParser', function () {
    describe('#parse', function () {
        var unit = ErrorStackParser;
        it('should not parse IE 9 Error', function() {
            expect(function() {
                unit.parse(CapturedExceptions.IE_9);
            }).toThrow(new Error('Cannot parse given Error object'));
        });

        it('should parse Safari 6 Error.stack', function () {
            var stackFrames = unit.parse(CapturedExceptions.SAFARI_6);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(3);
            expect(stackFrames[0]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 48]);
            expect(stackFrames[1]).toMatchStackFrame(['dumpException3', undefined, 'http://path/to/file.js', 52]);
            expect(stackFrames[2]).toMatchStackFrame(['onclick', undefined, 'http://path/to/file.js', 82]);
        });

        it('should parse Safari 7 Error.stack', function () {
            var stackFrames = unit.parse(CapturedExceptions.SAFARI_7);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(3);
            expect(stackFrames[0]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 48, 22]);
            expect(stackFrames[1]).toMatchStackFrame(['foo', undefined, 'http://path/to/file.js', 52, 15]);
            expect(stackFrames[2]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 108, 107]);
        });

        it('should parse Safari 8 Error.stack', function () {
            var stackFrames = unit.parse(CapturedExceptions.SAFARI_8);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(3);
            expect(stackFrames[0]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 47, 22]);
            expect(stackFrames[1]).toMatchStackFrame(['foo', undefined, 'http://path/to/file.js', 52, 15]);
            expect(stackFrames[2]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 108, 23]);
        });

        it('should parse Firefox 31 Error.stack', function () {
            var stackFrames = unit.parse(CapturedExceptions.FIREFOX_31);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(2);
            expect(stackFrames[0]).toMatchStackFrame(['foo', undefined, 'http://path/to/file.js', 41, 13]);
            expect(stackFrames[1]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 1, 1]);
        });

        it('should parse Firefox 35 Error.stack', function () {
            var stackFrames = unit.parse(CapturedExceptions.FIREFOX_35);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(3);
            expect(stackFrames[0]).toMatchStackFrame(['(?)()', undefined, "http://localhost:8100/test.web.bundle.js", 75, undefined]);
            expect(stackFrames[1]).toMatchStackFrame(['module.exports/req.onreadystatechange', undefined, "http://localhost:8001/git/frontend/test/generated/allTestsFE.bundle.js", 5943, 1]);
            expect(stackFrames[2]).toMatchStackFrame(['module.exports<.getSourceMapObject', undefined, "http://localhost:8001/git/frontend/test/generated/allTestsFE.bundle.js", 4970, 10]);
        });

        it('should parse another Firefox 35 Error.stack', function () {
            var stackFrames = unit.parse(CapturedExceptions.FIREFOX_35_B);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(27);

            expect(stackFrames[0]).toMatchStackFrame(['StackTrace$$get', undefined, "http://localhost:8100/generatedBuild/stackinfo.umd.js", 3788, 23]);
            expect(stackFrames[1]).toMatchStackFrame(['[21]</module.exports', undefined, "http://localhost:8100/generatedBuild/stackinfo.umd.js", 3923, 27]);
            expect(stackFrames[2]).toMatchStackFrame(['H/<', undefined, "http://localhost:8100/", 47, 13]);
            expect(stackFrames[3]).toMatchStackFrame(['gen/<', undefined, "http://localhost:8100/test/moar.js", 12, 9]);
            expect(stackFrames[4]).toMatchStackFrame(['x', undefined, "http://localhost:8100/test/moar.js", 7, 5]);

            expect(stackFrames[5]).toMatchStackFrame(['moar', undefined, "http://localhost:8100/test/moar.js", 2, 5]);
            expect(stackFrames[6]).toMatchStackFrame(['H', undefined, "http://localhost:8100/", 46, 9]);
            expect(stackFrames[7]).toMatchStackFrame(['G/<', undefined, "http://localhost:8100/", 41, 13]);
            expect(stackFrames[8]).toMatchStackFrame(['G', undefined, "http://localhost:8100/", 40, 10]);
            expect(stackFrames[9]).toMatchStackFrame(['F<[6]/<', undefined, "http://localhost:8100/", 34, 21]);


            expect(stackFrames[10]).toMatchStackFrame(['E.fn1', undefined, "http://localhost:8100/", 27, 13]);
            expect(stackFrames[11]).toMatchStackFrame(['D', undefined, "http://localhost:8100/", 22, 9]);
            expect(stackFrames[12]).toMatchStackFrame(['C', undefined, "http://localhost:8100/", 18, 9]);
            expect(stackFrames[13]).toMatchStackFrame(['B', undefined, "http://localhost:8100/", 14, 9]);
            expect(stackFrames[14]).toMatchStackFrame(['A', undefined, "http://localhost:8100/", 10, 9]);

            expect(stackFrames[15]).toMatchStackFrame(['unittest</<', undefined, "http://localhost:8100/", 156, 13]);
            expect(stackFrames[16]).toMatchStackFrame(['testGroup/runTest', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3746, 17]);
            expect(stackFrames[17]).toMatchStackFrame(['[18]</module.exports<.runTestGroup', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3465, 9]);
            expect(stackFrames[18]).toMatchStackFrame(['testGroup', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3752, 9]);
            expect(stackFrames[19]).toMatchStackFrame(['[19]</module.exports/UnitTester.prototype.test', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3881, 17]);

            expect(stackFrames[20]).toMatchStackFrame(['unittest<', undefined, "http://localhost:8100/", 153, 9]);
            expect(stackFrames[21]).toMatchStackFrame(['testGroup/runTest', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3746, 17]);
            expect(stackFrames[22]).toMatchStackFrame(['[18]</module.exports<.runTestGroup', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3465, 9]);
            expect(stackFrames[23]).toMatchStackFrame(['testGroup', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3752, 9]);
            expect(stackFrames[24]).toMatchStackFrame(['[19]</module.exports/UnitTester.prototype.test', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3881, 17]);

            expect(stackFrames[25]).toMatchStackFrame(['runTest', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3649, 13]);
            expect(stackFrames[26]).toMatchStackFrame(['[19]</module.exports/UnitTest</this.init/<', undefined, "http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js", 3593, 17]);
        });

        it('should parse V8 Error.stack', function () {
            debugger;
            var stackFrames = unit.parse(CapturedExceptions.CHROME_15);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(4);
            expect(stackFrames[0]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 13, 17]);
            expect(stackFrames[1]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 16, 5]);
            expect(stackFrames[2]).toMatchStackFrame(['foo', undefined, 'http://path/to/file.js', 20, 5]);
            expect(stackFrames[3]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 24, 4]);
        });

        it('should parse V8 Error.stack entries with port numbers', function () {
            var stackFrames = unit.parse(CapturedExceptions.CHROME_36);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(2);
            expect(stackFrames[0]).toMatchStackFrame(['dumpExceptionError', undefined, 'http://localhost:8080/file.js', 41, 27]);
        });

        it('should parse V8 Error.stack entries of other various types', function () {
            debugger;
            var stackFrames = unit.parse(CapturedExceptions.CHROME_40B);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(10);
            expect(stackFrames[0]).toMatchStackFrame(['Object.StackTrace$$get', undefined, 'http://localhost:8100/generatedBuild/stackinfo.umd.js', 3788, 23]);
            expect(stackFrames[1]).toMatchStackFrame(['21.module.exports', undefined, "http://localhost:8100/generatedBuild/stackinfo.umd.js", 3923, 38]);
            expect(stackFrames[2]).toMatchStackFrame([undefined, undefined, "http://localhost:8100/", 47, 13]);
            expect(stackFrames[3]).toMatchStackFrame([undefined, undefined, "http://localhost:8100/test/moar.js", 12, 9]);
            expect(stackFrames[4]).toMatchStackFrame(['x', undefined, 'http://localhost:8100/test/moar.js', 7, 5]);
            expect(stackFrames[5]).toMatchStackFrame(['moar', undefined, 'http://localhost:8100/test/moar.js', 2, 5]);
            expect(stackFrames[6]).toMatchStackFrame(['H', undefined, 'http://localhost:8100/', 46, 9]);
            expect(stackFrames[7]).toMatchStackFrame([undefined, undefined, 'http://localhost:8100/', 41, 13]);
            expect(stackFrames[8]).toMatchStackFrame(['Array.forEach', undefined, '(native)', undefined, undefined]);
            expect(stackFrames[9]).toMatchStackFrame(['G', undefined, 'http://localhost:8100/', 40, 14]);
        });

        it('should parse IE 10 Error stacks', function () {
            var stackFrames = unit.parse(CapturedExceptions.IE_10);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(3);
            expect(stackFrames[0]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 48, 13]);
            expect(stackFrames[1]).toMatchStackFrame(['foo', undefined, 'http://path/to/file.js', 46, 9]);
            expect(stackFrames[2]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 82, 1]);
        });

        it('should parse IE 11 Error stacks', function () {
            var stackFrames = unit.parse(CapturedExceptions.IE_11);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(3);
            expect(stackFrames[0]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 47, 21]);
            expect(stackFrames[1]).toMatchStackFrame(['foo', undefined, 'http://path/to/file.js', 45, 13]);
            expect(stackFrames[2]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 108, 1]);
        });

        it('should parse Opera 9.27 Error messages', function () {
            var stackFrames = unit.parse(CapturedExceptions.OPERA_927);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(3);
            expect(stackFrames[0]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 43]);
            expect(stackFrames[1]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 31]);
            expect(stackFrames[2]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 18]);
        });

        it('should parse Opera 10 Error messages', function () {
            var stackFrames = unit.parse(CapturedExceptions.OPERA_10);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(7);
            expect(stackFrames[0]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 42]);
            expect(stackFrames[1]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 27]);
            expect(stackFrames[2]).toMatchStackFrame(['printStackTrace', undefined, 'http://path/to/file.js', 18]);
            expect(stackFrames[3]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 4]);
            expect(stackFrames[4]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 7]);
            expect(stackFrames[5]).toMatchStackFrame(['foo', undefined, 'http://path/to/file.js', 11]);
            expect(stackFrames[6]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 15]);
        });

        it('should parse Opera 11 Error messages', function () {
            var stackFrames = unit.parse(CapturedExceptions.OPERA_11);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(4);
            expect(stackFrames[0]).toMatchStackFrame(['run', undefined, 'http://path/to/file.js', 27]);
            expect(stackFrames[1]).toMatchStackFrame(['bar', undefined, 'http://domain.com:1234/path/to/file.js', 18]);
            expect(stackFrames[2]).toMatchStackFrame(['foo', undefined, 'http://domain.com:1234/path/to/file.js', 11]);
            expect(stackFrames[3]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 15]);
        });

        it('should parse Opera 25 Error stacks', function () {
            var stackFrames = unit.parse(CapturedExceptions.OPERA_25);
            expect(stackFrames).toBeTruthy();
            expect(stackFrames.length).toBe(3);
            expect(stackFrames[0]).toMatchStackFrame([undefined, undefined, 'http://path/to/file.js', 47, 22]);
            expect(stackFrames[1]).toMatchStackFrame(['foo', undefined, 'http://path/to/file.js', 52, 15]);
            expect(stackFrames[2]).toMatchStackFrame(['bar', undefined, 'http://path/to/file.js', 108, 168]);
        });
    });
});
