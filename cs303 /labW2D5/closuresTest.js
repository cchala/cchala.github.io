//"use strict"
//const assert = require("assert"); 
// const myExports = require("./recursiveLinkedTest.js");
//const printListReverse=myExports.printListReverse;
//const printList=myExports.printList;
let arr;
describe("filter a number between two values", function(){
    it("sum a given number utill one using recursion",function(){
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert.deepEqual(myFilter(arr,3,8,inBetween),[ 3, 4, 5, 6, 7, 8 ])
    })
    it("Filter array in array",function(){
     assert.deepEqual(myFilterArra(arr,[1, 2, 11],inArray),[ 1, 2])
 })
//  it("Fibonacci numbers ",function(){
//      assert.deepEqual(fabonnacci(8),21)
//  })
 })