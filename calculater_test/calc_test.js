"use strict";
const assert = require("assert");
// name of the file should match
const calc = require("./calc.js");

describe("add", function () {

    it("5 plus 5 is 10", function () {
        assert.strictEqual(calc.add(5, 5), 10);
    });
    it("1 plus 0 is 1", function () {
        assert.strictEqual(calc.add(1,0), 1);
    });

    it("1 plus -1 is 0 ", function () {
        assert.strictEqual(calc.add(1, -1), 0);
    });
});

// write test description for sub and div




