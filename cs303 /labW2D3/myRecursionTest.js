//"use strict"
// const assert = require("assert"); 
// const myExports = require("./myRecursionTest.js");
// const myMap = myExports.myMap;

describe("Recursion and stack", function(){
   it("sum a given number utill one using recursion",function(){
       assert.deepEqual(sumNumber(5),15)
   })
   it("Calculate factorial",function(){
    assert.deepEqual(factorialNumber(5),120)
})
it("Fibonacci numbers ",function(){
    assert.deepEqual(fabonnacci(8),21)
})
})