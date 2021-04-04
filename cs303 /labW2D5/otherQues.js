function makeCounter() {
    let count = 0;
    
    return function() {
    return count++;
    };
   }
    
   let counter = makeCounter();
   let counter2 = makeCounter();
    
   console.log(counter()); // 0
   console.log(counter()); // 1
   console.log(counter()); // 2
    
   console.log(counter2()); // 0
   console.log(counter2()); // 1
    
   //Yes, they have independent outer Lexical Environments, each one has its own count.
   // you 
    
function makeWorker() {
    let name = "Pete";
    
    return function() {
    console.log(name);
    };
   }
    
   let name = "John";
   // create a function
   let work = makeWorker();
   work(); // what will it show? pete. 
   /*
    Because The work() function in the code below gets name
    from the place of its origin through the outer lexical environment reference
    */
   function Counter() {
 
    let count = 0;
    
    this.up = function() {
    return ++count;
    };
    this.down = function() {
    return --count;
    };
   }
    
   let counter = new Counter();
    
   console.log(counter.up()); // 1
  console.log(counter.up()); // 2
  console.log(counter.down()); // 1
    
   /*Both nested functions are created within the same outer Lexical Environment,
    so they share access to the same count variable.
   */
  let phrase = "Hello";
if (true) {
 let user = "John";
 
 function sayHi() {
 console.log(`${phrase}, ${user}`);
 }
}
 
sayHi(); // error.
 
// The function sayHi is declared inside the if, so it only lives inside it. and if function
let x = 1;
 
function func() {
console.log(x); // ?
let x = 2;
}
func(); //error.....Cannot access 'x' before initialization.

