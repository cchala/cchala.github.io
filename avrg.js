
function compute(numbers){
    let newNum=numbers.split(",")
    let sum=0
    for(let i=0;i<newNum.length;i++){
       sum+=newNum[i];
    }
    
    let firstValue=+(document.getElementById("number1").value);
    let secondValue=+(document.getElementById("number2").value);
    let sum=0
        sum= firstValue+secondValue;
        
    document.getElementById("output").innerHTML=sum;
    return sum;
}
