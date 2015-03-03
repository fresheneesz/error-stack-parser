/* exported CapturedExceptions */
var CapturedExceptions = {};

CapturedExceptions.OPERA_854 = {
    message: "Statement on line 44: Type mismatch (usually a non-object value used where an object is required)\n" +
    "Backtrace:\n" +
    "  Line 44 of linked script http://path/to/file.js\n" +
    "    this.undef();\n" +
    "  Line 31 of linked script http://path/to/file.js\n" +
    "    ex = ex || this.createException();\n" +
    "  Line 18 of linked script http://path/to/file.js\n" +
    "    var p = new printStackTrace.implementation(), result = p.run(ex);\n" +
    "  Line 4 of inline#1 script in http://path/to/file.js\n" +
    "    printTrace(printStackTrace());\n" +
    "  Line 7 of inline#1 script in http://path/to/file.js\n" +
    "    bar(n - 1);\n" +
    "  Line 11 of inline#1 script in http://path/to/file.js\n" +
    "    bar(2);\n" +
    "  Line 15 of inline#1 script in http://path/to/file.js\n" +
    "    foo();\n" +
    "",
    'opera#sourceloc': 44
};

CapturedExceptions.OPERA_902 = {
    message: "Statement on line 44: Type mismatch (usually a non-object value used where an object is required)\n" +
    "Backtrace:\n" +
    "  Line 44 of linked script http://path/to/file.js\n" +
    "    this.undef();\n" +
    "  Line 31 of linked script http://path/to/file.js\n" +
    "    ex = ex || this.createException();\n" +
    "  Line 18 of linked script http://path/to/file.js\n" +
    "    var p = new printStackTrace.implementation(), result = p.run(ex);\n" +
    "  Line 4 of inline#1 script in http://path/to/file.js\n" +
    "    printTrace(printStackTrace());\n" +
    "  Line 7 of inline#1 script in http://path/to/file.js\n" +
    "    bar(n - 1);\n" +
    "  Line 11 of inline#1 script in http://path/to/file.js\n" +
    "    bar(2);\n" +
    "  Line 15 of inline#1 script in http://path/to/file.js\n" +
    "    foo();\n" +
    "",
    'opera#sourceloc': 44
};

CapturedExceptions.OPERA_927 = {
    message: "Statement on line 43: Type mismatch (usually a non-object value used where an object is required)\n" +
    "Backtrace:\n" +
    "  Line 43 of linked script http://path/to/file.js\n" +
    "    bar(n - 1);\n" +
    "  Line 31 of linked script http://path/to/file.js\n" +
    "    bar(2);\n" +
    "  Line 18 of linked script http://path/to/file.js\n" +
    "    foo();\n" +
    "",
    'opera#sourceloc': 43
};

CapturedExceptions.OPERA_964 = {
    message: "Statement on line 42: Type mismatch (usually non-object value supplied where object required)\n" +
    "Backtrace:\n" +
    "  Line 42 of linked script http://path/to/file.js\n" +
    "                this.undef();\n" +
    "  Line 27 of linked script http://path/to/file.js\n" +
    "            ex = ex || this.createException();\n" +
    "  Line 18 of linked script http://path/to/file.js: In function printStackTrace\n" +
    "        var p = new printStackTrace.implementation(), result = p.run(ex);\n" +
    "  Line 4 of inline#1 script in http://path/to/file.js: In function bar\n" +
    "             printTrace(printStackTrace());\n" +
    "  Line 7 of inline#1 script in http://path/to/file.js: In function bar\n" +
    "           bar(n - 1);\n" +
    "  Line 11 of inline#1 script in http://path/to/file.js: In function foo\n" +
    "           bar(2);\n" +
    "  Line 15 of inline#1 script in http://path/to/file.js\n" +
    "         foo();\n" +
    "",
    'opera#sourceloc': 42,
    stacktrace: "  ...  Line 27 of linked script http://path/to/file.js\n" +
    "            ex = ex || this.createException();\n" +
    "  Line 18 of linked script http://path/to/file.js: In function printStackTrace\n" +
    "        var p = new printStackTrace.implementation(), result = p.run(ex);\n" +
    "  Line 4 of inline#1 script in http://path/to/file.js: In function bar\n" +
    "             printTrace(printStackTrace());\n" +
    "  Line 7 of inline#1 script in http://path/to/file.js: In function bar\n" +
    "           bar(n - 1);\n" +
    "  Line 11 of inline#1 script in http://path/to/file.js: In function foo\n" +
    "           bar(2);\n" +
    "  Line 15 of inline#1 script in http://path/to/file.js\n" +
    "         foo();\n" +
    ""
};

CapturedExceptions.OPERA_10 = {
    message: "Statement on line 42: Type mismatch (usually non-object value supplied where object required)",
    'opera#sourceloc': 42,
    stacktrace: "  Line 42 of linked script http://path/to/file.js\n" +
    "                this.undef();\n" +
    "  Line 27 of linked script http://path/to/file.js\n" +
    "            ex = ex || this.createException();\n" +
    "  Line 18 of linked script http://path/to/file.js: In function printStackTrace\n" +
    "        var p = new printStackTrace.implementation(), result = p.run(ex);\n" +
    "  Line 4 of inline#1 script in http://path/to/file.js: In function bar\n" +
    "             printTrace(printStackTrace());\n" +
    "  Line 7 of inline#1 script in http://path/to/file.js: In function bar\n" +
    "           bar(n - 1);\n" +
    "  Line 11 of inline#1 script in http://path/to/file.js: In function foo\n" +
    "           bar(2);\n" +
    "  Line 15 of inline#1 script in http://path/to/file.js\n" +
    "         foo();\n" +
    ""
};

CapturedExceptions.OPERA_11 = {
    message: "'this.undef' is not a function",
    stack: "<anonymous function: run>([arguments not available])@http://path/to/file.js:27\n" +
    "bar([arguments not available])@http://domain.com:1234/path/to/file.js:18\n" +
    "foo([arguments not available])@http://domain.com:1234/path/to/file.js:11\n" +
    "<anonymous function>@http://path/to/file.js:15\n" +
    "Error created at <anonymous function>@http://path/to/file.js:15",
    stacktrace: "Error thrown at line 42, column 12 in <anonymous function: createException>() in http://path/to/file.js:\n" +
    "    this.undef();\n" +
    "called from line 27, column 8 in <anonymous function: run>(ex) in http://path/to/file.js:\n" +
    "    ex = ex || this.createException();\n" +
    "called from line 18, column 4 in printStackTrace(options) in http://path/to/file.js:\n" +
    "    var p = new printStackTrace.implementation(), result = p.run(ex);\n" +
    "called from line 4, column 5 in bar(n) in http://path/to/file.js:\n" +
    "    printTrace(printStackTrace());\n" +
    "called from line 7, column 4 in bar(n) in http://path/to/file.js:\n" +
    "    bar(n - 1);\n" +
    "called from line 11, column 4 in foo() in http://path/to/file.js:\n" +
    "    bar(2);\n" +
    "called from line 15, column 3 in http://path/to/file.js:\n" +
    "    foo();"
};

CapturedExceptions.OPERA_12 = {
    message: "Cannot convert 'x' to object",
    stack: "<anonymous function>([arguments not available])@http://localhost:8000/ExceptionLab.html:48\n" +
    "dumpException3([arguments not available])@http://localhost:8000/ExceptionLab.html:46\n" +
    "<anonymous function>([arguments not available])@http://localhost:8000/ExceptionLab.html:1",
    stacktrace: "Error thrown at line 48, column 12 in <anonymous function>(x) in http://localhost:8000/ExceptionLab.html:\n" +
    "    x.undef();\n" +
    "called from line 46, column 8 in dumpException3() in http://localhost:8000/ExceptionLab.html:\n" +
    "    dumpException((function(x) {\n" +
    "called from line 1, column 0 in <anonymous function>(event) in http://localhost:8000/ExceptionLab.html:\n" +
    "    dumpException3();"
};

CapturedExceptions.OPERA_25 = {
    message: "Cannot read property 'undef' of null",
    name: "TypeError",
    stack: "TypeError: Cannot read property 'undef' of null\n" +
    "    at http://path/to/file.js:47:22\n" +
    "    at foo (http://path/to/file.js:52:15)\n" +
    "    at bar (http://path/to/file.js:108:168)"
};

CapturedExceptions.CHROME_15 = {
    'arguments': ["undef"],
    message: "Object #<Object> has no method 'undef'",
    stack: "TypeError: Object #<Object> has no method 'undef'\n" +
    "    at bar (http://path/to/file.js:13:17)\n" +
    "    at bar (http://path/to/file.js:16:5)\n" +
    "    at foo (http://path/to/file.js:20:5)\n" +
    "    at http://path/to/file.js:24:4"
};

CapturedExceptions.CHROME_36 = {
    message: "Default error",
    name: "Error",
    stack: "Error: Default error\n" +
    "    at dumpExceptionError (http://localhost:8080/file.js:41:27)\n" +
    "    at HTMLButtonElement.onclick (http://localhost:8080/file.js:107:146)"
};


// note, CHROME_40B comes from the same code as FIREFOX_35_B. The code is:
/*
function A(asdf) {
    B(asdf)
}
function B(asdf) {
    C.call(this, asdf)
}
function C(asdf) {
    new D(asdf)
}
function D(asdf) {
    E.fn1(asdf)
}
var E = {
    fn1: function(asdf) {
        F[0][6]()(asdf)
    }
}
var F = [{
    6: function() {
        return function(asdf) {
            G(asdf)
        }
    }
}]
var G = function(asdf) {
    ;[1].forEach(function() {
        H(asdf)
    })
}
var H = function(arg) {
    moar(function() {
        try {
            throw new Error('who cares')
        } catch(e) {
            // e from here
        }
    })
}

A(23)

 */
CapturedExceptions.CHROME_40B = { // I'm assuming here that the numbers are the version (this is version 40)
    message: "who cares",
    name: "Error",
    stack: "Error\n"+
    "    at Object.StackTrace$$get [as get] (http://localhost:8100/generatedBuild/stackinfo.umd.js:3788:23)\n"+
    "    at 21.module.exports (http://localhost:8100/generatedBuild/stackinfo.umd.js:3923:38)\n"+
    "    at http://localhost:8100/:47:13\n"+
    "    at http://localhost:8100/test/moar.js:12:9\n"+
    "    at x (http://localhost:8100/test/moar.js:7:5)\n"+
    "    at moar (http://localhost:8100/test/moar.js:2:5)\n"+
    "    at H (http://localhost:8100/:46:9)\n"+
    "    at http://localhost:8100/:41:13\n"+
    "    at Array.forEach (native)\n"+
    "    at G (http://localhost:8100/:40:14)"
}


CapturedExceptions.FIREFOX_3 = {
    fileName: "http://127.0.0.1:8000/js/stacktrace.js",
    lineNumber: 44,
    message: "this.undef is not a function",
    name: "TypeError",
    stack: "()@http://127.0.0.1:8000/js/stacktrace.js:44\n" +
    "(null)@http://127.0.0.1:8000/js/stacktrace.js:31\n" +
    "printStackTrace()@http://127.0.0.1:8000/js/stacktrace.js:18\n" +
    "bar(1)@http://127.0.0.1:8000/js/file.js:13\n" +
    "bar(2)@http://127.0.0.1:8000/js/file.js:16\n" +
    "foo()@http://127.0.0.1:8000/js/file.js:20\n" +
    "@http://127.0.0.1:8000/js/file.js:24\n" +
    ""
};

CapturedExceptions.FIREFOX_7 = {
    fileName: "file:///G:/js/stacktrace.js",
    lineNumber: 44,
    stack: "()@file:///G:/js/stacktrace.js:44\n" +
    "(null)@file:///G:/js/stacktrace.js:31\n" +
    "printStackTrace()@file:///G:/js/stacktrace.js:18\n" +
    "bar(1)@file:///G:/js/file.js:13\n" +
    "bar(2)@file:///G:/js/file.js:16\n" +
    "foo()@file:///G:/js/file.js:20\n" +
    "@file:///G:/js/file.js:24\n" +
    ""
};

CapturedExceptions.FIREFOX_14 = {
    message: "x is null",
    stack: "@http://path/to/file.js:48\n" +
    "dumpException3@http://path/to/file.js:52\n" +
    "onclick@http://path/to/file.js:1\n" +
    "",
    fileName: "http://path/to/file.js",
    lineNumber: 48
};

CapturedExceptions.FIREFOX_31 = {
    message: "Default error",
    name: "Error",
    stack: "foo@http://path/to/file.js:41:13\n" +
    "bar@http://path/to/file.js:1:1\n" +
    "",
    fileName: "http://path/to/file.js",
    lineNumber: 41,
    columnNumber: 12
};

CapturedExceptions.FIREFOX_35 = {             // I'm assuming here that the numbers are the version (this is version 35)
    message: "whatever",
    name: "Error",
    stack: "ReferenceError: whatever\n" +
    "   (?)()@http://localhost:8100/test.web.bundle.js:75\n" +
    "   module.exports/req.onreadystatechange@http://localhost:8001/git/frontend/test/generated/allTestsFE.bundle.js:5943:1\n" +
    "   module.exports<.getSourceMapObject@http://localhost:8001/git/frontend/test/generated/allTestsFE.bundle.js:4970:10",
    fileName: "http://path/to/file.js",
    lineNumber: 75
};

// note, this comes from the same code as CHROME_40B
CapturedExceptions.FIREFOX_35_B = {           // I'm assuming here that the numbers are the version (this is version 35)
    message: "whatever",
    name: "Error",
    stack: "StackTrace$$get@http://localhost:8100/generatedBuild/stackinfo.umd.js:3788:23\n" +
        "[21]</module.exports@http://localhost:8100/generatedBuild/stackinfo.umd.js:3923:27\n" +
        "H/<@http://localhost:8100/:47:13\n" +
        "gen/<@http://localhost:8100/test/moar.js:12:9\n" +
        "x@http://localhost:8100/test/moar.js:7:5\n" +

        "moar@http://localhost:8100/test/moar.js:2:5\n" +
        "H@http://localhost:8100/:46:9\n" +
        "G/<@http://localhost:8100/:41:13\n" +
        "G@http://localhost:8100/:40:10\n" +
        "F<[6]/<@http://localhost:8100/:34:21\n" +


        "E.fn1@http://localhost:8100/:27:13\n" +
        "D@http://localhost:8100/:22:9\n" +
        "C@http://localhost:8100/:18:9\n" +
        "B@http://localhost:8100/:14:9\n" +
        "A@http://localhost:8100/:10:9\n" +

        "unittest</<@http://localhost:8100/:156:13\n" +
        "testGroup/runTest@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3746:17\n" +
        "[18]</module.exports<.runTestGroup@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3465:9\n" +
        "testGroup@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3752:9\n" +
        "[19]</module.exports/UnitTester.prototype.test@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3881:17\n" +


        "unittest<@http://localhost:8100/:153:9\n" +
        "testGroup/runTest@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3746:17\n" +
        "[18]</module.exports<.runTestGroup@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3465:9\n" +
        "testGroup@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3752:9\n" +
        "[19]</module.exports/UnitTester.prototype.test@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3881:17\n" +

        "runTest@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3649:13\n" +
        "[19]</module.exports/UnitTest</this.init/<@http://localhost:8100/node_modules/deadunit/browserPackage/deadunit.browser.gen.umd.js:3593:17\n",
    fileName: "http://localhost:8100/generatedBuild/stackinfo.umd.js",
    lineNumber: 3788,
    columnNumber: 22
};

CapturedExceptions.SAFARI_6 = {
    message: "'null' is not an object (evaluating 'x.undef')",
    stack: "@http://path/to/file.js:48\n" +
    "dumpException3@http://path/to/file.js:52\n" +
    "onclick@http://path/to/file.js:82\n" +
    "[native code]",
    line: 48,
    sourceURL: "http://path/to/file.js"
};

CapturedExceptions.SAFARI_7 = {
    message: "'null' is not an object (evaluating 'x.undef')",
    name: "TypeError",
    stack: "http://path/to/file.js:48:22\n" +
    "foo@http://path/to/file.js:52:15\n" +
    "bar@http://path/to/file.js:108:107",
    line: 47,
    sourceURL: "http://path/to/file.js"
};

CapturedExceptions.SAFARI_8 = {
    message: "null is not an object (evaluating 'x.undef')",
    name: "TypeError",
    stack: "http://path/to/file.js:47:22\n" +
    "foo@http://path/to/file.js:52:15\n" +
    "bar@http://path/to/file.js:108:23",
    line: 47,
    column: 22,
    sourceURL: "http://path/to/file.js"
};

CapturedExceptions.SAFARI_8_EVAL = {
    message: "Can't find variable: getExceptionProps",
    name: "ReferenceError",
    stack: "eval code\n" +
    "eval@[native code]\n" +
    "foo@http://path/to/file.js:58:21\n" +
    "bar@http://path/to/file.js:109:91",
    line: 1,
    column: 18
};

CapturedExceptions.IE_9 = {
    message: "Unable to get property 'undef' of undefined or null reference",
    description: "Unable to get property 'undef' of undefined or null reference"
};

CapturedExceptions.IE_10 = {
    message: "Unable to get property 'undef' of undefined or null reference",
    stack: "TypeError: Unable to get property 'undef' of undefined or null reference\n" +
    "   at Anonymous function (http://path/to/file.js:48:13)\n" +
    "   at foo (http://path/to/file.js:46:9)\n" +
    "   at bar (http://path/to/file.js:82:1)",
    description: "Unable to get property 'undef' of undefined or null reference",
    number: -2146823281
};

CapturedExceptions.IE_11 = {
    message: "Unable to get property 'undef' of undefined or null reference",
    name: "TypeError",
    stack: "TypeError: Unable to get property 'undef' of undefined or null reference\n" +
    "   at Anonymous function (http://path/to/file.js:47:21)\n" +
    "   at foo (http://path/to/file.js:45:13)\n" +
    "   at bar (http://path/to/file.js:108:1)",
    description: "Unable to get property 'undef' of undefined or null reference",
    number: -2146823281
};

CapturedExceptions.IE_11_EVAL = {
    message: "'getExceptionProps' is undefined",
    name: "ReferenceError",
    stack: "ReferenceError: 'getExceptionProps' is undefined\n" +
    "   at eval code (eval code:1:1)\n" +
    "   at foo (http://path/to/file.js:58:17)\n" +
    "   at bar (http://path/to/file.js:109:1)",
    description: "'getExceptionProps' is undefined",
    number: -2146823279
};
