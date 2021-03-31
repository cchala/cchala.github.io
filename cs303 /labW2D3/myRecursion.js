"use strict"
//module.exports = {  };
/**
 * 
 * @param {number} num 
 * @return 
 */
function sumNumber(num){
    if(num===1){
        return num;
    }else{
        return num + sumNumber(num-1)
    }
}

function factorialNumber(num){
    if(num<1){
        num=Math.abs(num)
    }
    if(num===1){
        return num;
    }else{
        return num * factorialNumber(num-1)
    }
  
}

function fabonnacci(num){
    if(num<2){
       return num
    }else{
        return fabonnacci(num-1)+ fabonnacci(num-2)
    }
}


