"use strict";
/**
 * 
 * @param {number} op1 the operand for the add method;
 * @param {number} op2 the operand for the add method;
 * @return {number} return; 
 */
function add(op1, op2) {
 return op1+op2;
}
/**
 * 
 * @param {number} op1; 
 * @param {number} op2;
 * @return {number}; 
 */
function sub(op1, op2) {
 return op1-op2;
}
/**
 * 
 * @param {number} op1; 
 * @param {number} op2;
 * @return {number};
 */
function div(op1, op2) {
    return op1/op2;
    
}

module.exports = {add, sub, div};