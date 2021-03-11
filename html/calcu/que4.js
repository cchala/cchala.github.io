"use strict";
function addValue(){
    let firstValue=+(document.getElementById("number1").value);
    let secondValue=+(document.getElementById("number2").value);
    let sum=0
        sum= firstValue+secondValue;
        
    document.getElementById("output").innerHTML=sum;
    return sum;
    }
    function subtractValue(){
    let firstValue=+(document.getElementById("number1").value);
    let secondValue=+(document.getElementById("number2").value);
    let subtract=0
        subtract= firstValue-secondValue;
        
    document.getElementById("output").innerHTML=subtract;
    return subtract;
    }
    function multiplyValue(){
    let firstValue=+(document.getElementById("number1").value);
    let secondValue=+(document.getElementById("number2").value);
    let product=0
        product= firstValue*secondValue;
        
    document.getElementById("output").innerHTML=product;
    return product;
    }