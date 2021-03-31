"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge,sumOddAge,sumEvenAge,findMaxAge,includesEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}
//const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
//"Barney", age: 80}]
function doubleAges(arr){
    
  let resu= arr.map(item=>({name:item.name, age:item.age*2},{name:item.name, age:item.age*2},{name:item.name, age:item.age*2},{name:item.name, age:item.age*2}))
      return resu

}

function filterEven(arr){
    return arr.filter(elem=>elem%2===0)

}

function filterOver10(arr) {

    return arr.filter(element=>element.age>10)
}

function findEvenNum(arr){
    return arr.find(element=>element%2===0)

}

function findEvenAge(arr){
    return arr.find(element=>element.age%2===0)

}

function includesEvenNum(arr){
    return arr.includes(element=>element%2==0)
 
}
function includesEvenAge(arr) {
    let even = arr.map(user => user.age % 2 === 0 ? true : false);
    
    return even.includes(true);
    }
function sumOfNumber(arr){
    return arr.reduce((sum,element)=>sum+element,0)
}
function avgOfNumber(arr){
    let result= arr.reduce((sum,element)=>(sum+element),0)
    return result/arr.length;
}
function maxOfNumber(arr){
    return arr.reduce((max,element)=>Math.max(max,element),-Infinity)
} 
function findMaxAge(arr){
    return arr.reduce((max,element)=>Math.max(max,element.age),-Infinity)
}

function evenAge(arr){
    let evenArr=arr.filter(element=>element.age%2===0)
    let count=evenArr.length;
    return count;
  }
  
  function sumEvenAge(arr){

    let res=arr.map(element=>element.age).filter(element=>element%2==0).reduce((sum,element)=>sum+element,0)
     let numberOfEven=evenAge(arr);
    return res/numberOfEven
  }
  function oddAge(arr){
    let evenArr=arr.filter(element=>element.age%2!==0)
    let count=evenArr.length;
    return count;
  }
  
  function sumOddAge(arr){
  
    
    let res=arr.map(element=>element.age).filter(element=>element%2!==0).reduce((sum,element)=>sum+element,0)
     let numberOfEven=oddAge(arr);
    return res/numberOfEven
  }
  function multply(x,y,w){
    return x*y*w
  }


