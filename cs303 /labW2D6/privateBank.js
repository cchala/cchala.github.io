"use strict"
function makeBank(){
    let bank={};
    let transactionsDB=[
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }
    ]
bank.getCustomer=function(id){
    let customer=transactionsDB.find(customerTofind=>customerTofind.customerId===id);
    return customer;
} 
bank.getBalance=function(id){
    let customer=bank.getCustomer(id);
    let balance=customer.customerTransactions.reduce((priviousValue,value)=>priviousValue+value,0)
    return balance;
}
bank.saveTransaction=function(id,amount){
    let customer=bank.getCustomer(id);
    customer.customerTransactions.push(amount);
} 
bank.debit=function(id,amount){
    let balance=bank.getBalance(id);
    if(amount<0){
        console.log("Invalid amount please try again!!")
    }else if(amount>balance){
        console.log("Sorry!! You don't hava sufficient balance")
    }else{
        amount=amount*-1
        balance+=amount;
        bank.saveTransaction(id,amount)
    }
    return balance;
} 
bank.credit=function(id,amount){
    let balance=bank.getBalance(id);
    if(amount<0){
        console.log("Invalid entry")
    }
   bank.saveTransaction(id,amount);
   balance+=amount;
   return balance;
    
}
bank.bankBalance=function(){
    let totalBalce=0;
    for(let customer of transactionsDB){
        totalBalce+=bank.getBalance(customer.customerId)
    }
    return totalBalce;
} 
return bank;
}
let bankFunc=makeBank();
console.log(bankFunc.getCustomer(2))
console.log(bankFunc.getBalance(2))//10
console.log(bankFunc.debit(2,5))
console.log(bankFunc.getCustomer(2))
console.log(bankFunc.credit(2,100))
console.log(bankFunc.getCustomer(2))
console.log(makeBank())
console.log(bankFunc.bankBalance())