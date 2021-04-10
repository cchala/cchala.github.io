"use strict";
/**
 * 
 * @param {*} currentValue 
 * @param {*} increment 
  * @returns {Accumulator} constructor function
 */
function Accumulator(currentValue,increment){
    this.currentValue=currentValue;
    this.increment=increment;
    /**
     * 
     * @returns current values+ increment
     */
    this.accumulate=function(){
      return this.currentValue+=this.increment;
    }
    /**
     * 
     * @returns the current values
     */
    this.report=function(){
       return this.currentValue;   
    }
}
/**
 * Bicycle object
 */
const  bicycle={
    gear:1,
    speed:0,
    /**
     * 
     * @param {Number} increment is number
     */
    speedUp(increment){
        this.speed+=increment
    },
    /**
     * 
     * @param {Number} decrement is number
     */
    applyBrake(decrement){
        this.speed-=decrement
    }
}
/**
 * mountainBike object and inherits from Bicycle object
 */
const  mountainBike={
    gear:3,
    speed:2,
    seatHeight:1,
    /**
     * 
     * @param {Number} seatHeight is number
     */
    setSeatHeight(seatHeight){
        this.seatHeight=seatHeight
    },
    __proto__:bicycle
}