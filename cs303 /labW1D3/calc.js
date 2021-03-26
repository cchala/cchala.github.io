"use strict"
// /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {calculator }; //add all of your function names here that you need for the node mocha tests
 /**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
 /**
 * 
 * @returns{Number} sum;
 */
this.sum=function(){
    return this.a+this.b;
    };
    /**
    * 
    * @returns {Number} multiplication;
    */
    this.mul=function(){
    return this.a*this.b;
    }
    /**
    * 
    * @returns {Number} subtraction;
    */
    this.sub=function(){
    return this.a-this.b
    }
    /**
    * 
    * @returns {Number} division;
    */
    this.div=function(){
    return this.a/this.b;
    }
  }