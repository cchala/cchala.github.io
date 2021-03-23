"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */ 
//module.exports = {maxOfThree, sum, multiply };  //add all of your function names here that you need for the node 
//exports.maxOfThree = maxOfThree;


/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    if (a > b && b > c) {return a;}
    if (a > c && c > b) {return a;}
    if (b > a && b> c) {return b;}
    if (b > c && b > c) {return b;}
    if (c > a && a > b) {return c;}
    if (c > b && b > a) {return c;}
   

 
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const element of arr){
        tot += element;
    }

    return tot;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;

for(let element of arr){
    tot*=element;
}

    return tot;

}
/**
 * 
 * @param {Array} arr of String
 * @returns {number} find longest name 
 */

 function findLongestWord(arr){
     let longestName=0;
     let longName=""
     for(let element of arr){
         if(element.length>longestName){
             longestName=element.length;
             longName=element;
         }
     }
     return longName;
 }

 function reverseArray(arr){
    let newarr=[];
    let len = arr.length
    for(let i= len;i>0;i--){
        newarr.push(arr.pop(i))
    }
    return newarr;
}
 
function reverseArrayInPlace(array){
    let len=array.length;
    for (let i = 0; i <len/2 ; i++) {
        let temp=array[i];
        array[i]=array[len-1-i];
        array[len-1-i]=temp;
        
    }
    return array;
 
}



function scoreExams(studentAnswers, correctAnswers){
    let score=[];
    for(let studAnsr of studentAnswers){
    let answr=0;
    for(let j=0; j<studAnsr.length; j++){
    if(studAnsr[j]===correctAnswers[j]){
     answr++;
    }
   
    }
    score.push(answr);
}
    return score;
    }
   
    
    const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
    const correctAnswers = [3, 1, 2];
    
    console.log(scoreExams(studentAnswers,correctAnswers));


