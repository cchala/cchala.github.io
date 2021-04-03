"use strict"
//module.exports = { myFilter,myFilterArra };
/**
 * 
 * @param {number} num 
 * @param {number} num2 
 * @return {number}
 */
function inBetween(num, num2) {
    return function between(target) {
        if (target >= num && target <=num2) {
            return true;
        } else {
            return false;
        }
    }
}
function myFilter(arr,a,b,cbf) {
    let filterred= arr.filter(cbf(a,b)); 
    return filterred
}
//let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(myFilter(arr3,3,8,inBetween));


let arrForInArr = [1, 2, 3, 4, 5, 6, 7]
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

function myFilterArra(arr,arr2,cbf) {
      let final = arr.filter(cbf(arr2))
    return final
}
// let result = inArray;
// let final = arrForInArr.filter(result([3, 5, 8]))
//console.log(myFilterArra(arrForInArr,[3, 5, 8],inArray));

function makeArmy() {

    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () { 
            console.log(i); 
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0](); 
army[5]();


