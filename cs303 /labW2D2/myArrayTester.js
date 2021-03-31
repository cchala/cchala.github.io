//"use strict"
// const assert = require("assert");  //always need this with node
// const myExports = require("./myArray.js");
// const myMap = myExports.myMap;
// const myFilter = myExports.myFilter;
// const myreduce = myExports.myreduce;
// const multiplyAll = myExports.multiplyAll;
// const oddValue = myExports.oddValue;
// const sumValue = myExports.sumValue;


 
describe("higher oder practice", function () {
    // beforeEach(function () {
    //     numArray = [1, 2, 3, 4, 5];
    // })
    it("multiply each element", function () {
        assert.deepEqual(myMap([1, 2, 3, 4, 5], multiplyAll), [1, 4, 9, 16, 25])
        assert.deepEqual(myMap([0, 2, 5, 4, 1], multiplyAll), [0, 4, 25, 16, 1])
 
    })
 
    it("it filters odd elements", function () {
 
        assert.deepEqual(myFilter([1, 2, 3, 4, 5], oddValue), [1, 3, 5])
        assert.deepEqual(myFilter([11, 1, 71, 4, 5], oddValue), [11,1, 71, 5])
    })
 
    it("it sums values", function () {
 
        assert.strictEqual(myreduce([1, 2, 3, 4, 5], sumValue), 15)
        assert.strictEqual(myreduce([11, 9, 20, 10, 5], sumValue), 55)
    })
 
})