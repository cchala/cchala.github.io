//"use strict"
// const assert = require("assert"); 
// const myExports = require("./recursiveLinkedTest.js");
let list
describe("Recursion print of linked list", function(){
    it("print Linked list of names",function(){

 list = {
    name: "Chimdi",
    next: {
      name: "Chala",
      next: {
        name: "Luwam",
        next: {
          name: "Mesay",
          next:null,
        }
      }
    }
  };
        assert.deepEqual(printList(list),"ChimdiChalaLuwamMesay")
    })
//     it("Calculate factorial",function(){
//      assert.deepEqual(factorialNumber(5),120)
//  })
 it("Reverse name ",function(){
     assert.deepEqual(printListReverse(list),"MesayLuwamChalaChimdi")
 })
 })