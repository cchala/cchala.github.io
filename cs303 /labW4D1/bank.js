"use strict"

// const { Account } = require("./account");
// const { SavingsAccount } = require("./savingsaccount");
// const { CheckingAccount } = require("./checkingaccount");
class Bank{
    static nextNumber=0;
    /**
     * Bank constructor
     */
    constructor(){
        Bank.nextNumber++;
        this. _account=[];
    }
    /**
     * add accounts
     */
    addAccount(){
       this._account.push(new Account(Bank.nextNumber++))
    }
    /**
     * 
     * @param {Number} interest is interest rate
     */
    addSavingsAccount(interest){
        this._account.push(new SavingsAccount(Bank.nextNumber++,interest))
    }
    /**
     * 
     * @param {Number} overdraft is over draft
     */
    addCheckingAccount(overdraft){
        this._account.push(new CheckingAccount(Bank.nextNumber++,overdraft))
    }
   /**
    * 
    * @param {Number} number  is account number
    */
    closeAccount(number){
        let index=this._account.findIndex((item)=>item._number===number)
        this._account.splice(index,1)
    }
    /**
     * 
     * @returns bank reports 
     */
    accountReport(){
      let accountReport=""  
      for(let account of this._account ){
        accountReport+=account.toString()+"\n"
      }
      return accountReport;
    }
}

//exports.Bank = Bank;
 //console.log(Bank.nextNumber)//0
//  let bank=new Bank()
//  bank.addAccount()
//  bank.addCheckingAccount(500)
// bank.addSavingsAccount(5)
// console.log( bank.accountReport())
// console.log(new SavingsAccount().toString())
// console.log(bank._account)
// console.log("+++++++++++++++++++++++++++=\n")
// bank.closeAccount(2)
// console.log(bank._account)
