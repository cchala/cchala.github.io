//"use strict"
//const assert = require("assert"); 
// const myExports = require("./recursiveLinkedTest.js");
//const printListReverse=myExports.printListReverse;
//const printList=myExports.printList;

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

 it("Reverse name ",function(){
     assert.deepEqual(printListReverse(list),"MesayLuwamChalaChimdi")
 })
 it("Find the node in the tree if it contains ",function(){
  assert.deepEqual(contains(homer,"Maggie"),true)
  assert.deepEqual(contains(homer,"Abe"),false)
})
it("Generate linked list",function(){
  assert.deepEqual(allCaps(abe), {
    value: 'Abe',
    next:{ value: 'Homer', next:{ value: 'Bart', next: [Node] } }
  })
})
 })