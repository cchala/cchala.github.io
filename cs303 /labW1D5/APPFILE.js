"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator,copyAndSort,sortByAge,getAverage }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {array} arr is the array as parameter ;
 * @param {number} a is the value;
 * @param {number} b is the value;
 * @return {array} the result
 */
function filterRange(arr, a, b) {
    return arr.filter(value =>(a<=value&& value<=b))
  }

 /**
  * 
  * @param {arra} arr is the array as parameter
  * @param {number} a the value as boundary
  * @param {number} b the value as boundary
  * @return {array} returns array
  */
  function filterRangeInPlace(arr, a, b) {
  for(let i=0;i<arr.length;i++){
      if(a <= arr[i]&&arr[i]>=b){
        arr.splice(i,1)
      }
  }
  
  }

/**
 * 
 */
  function Calculator() {

        this.methods = {
          "-": (a, b) => a - b,
          "+": (a, b) => a + b
        };
      
        this.calculate = function(str) {
      
          let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
      
          if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
          }
      
          return this.methods[op](a, b);
        };
      
        this.addMethod = function(name, func) {
          this.methods[name] = func;
        };
      }
  
/**
 * 
 * @param {arra} arr
 * @return {arr} returns new array 
 */
  function unique(arr) {
        let newarr=[];
        for(let element of arr){
           if(newarr.includes(element)){
               continue;
           }
           else {
               newarr.push(element);
           }
         
            }
            return newarr;
        }
  

/**
 * 
 * @param {array} array is an array of object;
 * @return {object}
 */
  function groupById(array) {
        return array.reduce((obj, value) => {
          obj[value.id] = value;
          return obj;
        }, {})
      }
/**
 * 
 * @param {arr} arr 
 * @return {arr} returns sorted array
 */
  function copyAndSort(arr){
    let copy=arr.slice();
    return copy.sort((a,b)=>a-b) 
}
/**
 * 
 * @param {arr} arr
 * @return {arr} sorted array 
 */
function sortByAge(arr){
    return arr.sort((a,b)=>a.age-b.age)
}
/**
 * 
 * @param {array} arr 
 * @return {number} returns average of age
 */
function getAverage(arr){
    let sum=0;
    
    for(let element of arr){
        sum+=element.age
        
    }
    return sum/arr.length;
}

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

