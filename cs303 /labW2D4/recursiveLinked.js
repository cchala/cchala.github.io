"use strict"
//module.exports = {printList,printListReverse,contains};

// let list = {
//     name: "Chimdi",
//     next: {
//       name: "Chala",
//       next: {
//         name: "Luwam",
//         next: {
//           name: "Mesay",
//           next:null,
//         }
//       }
//     }
//   };

/**
 * 
 * @param {object} list 
 * @return {string} returns string with out space
 */
function printList(list) {


    if (list) {
        return list.name + "" + printList(list.next) // do the same for the rest of the list
    }
    return ""

}

//console.log(printList(list))

/**
 * 
 * @param {object} list 
 * @return {string} strings
 */
function printListReverse(list) {


    if (list) {
        return printListReverse(list.next) + list.name + "" // do the same for the rest of the list
    }
    return ""

}
//console.log(printListReverse(list))
/**
 * It is class
 */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}

const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);
/**
 * 
 * @param {object} node 
 * @return {object}
 */
function printName(node) {
    console.log(node.value)
    if (node.descendents === []) {
        return "end";
    }
    else {

        for (let descendent of node.descendents) {
            printName(descendent);
        }
    }
}

console.log(printName(abe));

/**
 * 
 * @param {Object} node 
 * @param {person} target 
 * @return {boolean}
 */
function contains(node, target) {

    if (node.descendents === null) {
        if (node.value === target) {
            return true;
        } else {
            return false;
        }
    } else {
        let childResult = false;
        if (node.value === target) {
            return true;
        }
        for (let child of node.descendents) {
            childResult = contains(child, target);
            if (childResult === true) {
                return true;
            }
        }
        return false;
    }
}
//console.log(contains(homer, "Maggie")); 
//console.log(contains(homer, "Abe"));



class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
// create nodes with values
const abe1 = new Node('Abe');
const homer1 = new Node('Homer');
const bart1 = new Node('Bart');
const lisa1 = new Node('Lisa');
const maggie1 = new Node('Maggie');
// associate root with is descendents
abe1.next = homer1;
homer1.next = bart1;
bart1.next = lisa1;
lisa1.next = maggie1;
maggie1.next = null;
//homer.descendents.push(bart, lisa, maggie);

//console.log(abe1);
// converting to cabs
function allCaps(node) {
    console.log((node.value).toUpperCase());
    if (node.descendents === []) {
        return "end";
    }
    else {

        for (let descendent of node.descendents) {
            allCaps(descendent);
        }
    }
}
console.log(" \n All Caps \n ");
allCaps(abe);

// adding *** before and  after the value

function addStars(node) {
    console.log(("***" + node.value + "***"));
    if (node.descendents === []) {
        return "end";
    }
    else {

        for (let descendent of node.descendents) {
            addStars(descendent);
        }
    }
}
console.log(" \n add stars \n");
addStars(abe);

// reversing the strings in the value

function reverseNode(node) {
    console.log(node.value.split("").reverse().join(""));
    if (node.descendents === []) {
        return "end";
    }
    else {

        for (let descendent of node.descendents) {
            reverseNode(descendent);
        }
    }
}
console.log(" \n reverse the node values \n");
reverseNode(abe);

let helen, thomas, mary, greg;
helen = ["bed", true, "chair"];
thomas = ["tall", 33];
mary = "pretty";
greg = [35, "car"]
copyOfHelen = [...helen];
copyOfThomas = [...thomas];
console.log(copyOfHelen);
console.log(copyOfThomas);

let helen2;
let thomas2;
let mary2;
let  greg2;
helen2 = ["bed", true, "chair"];
thomas2 = ["tall", 33];
mary2 = "pretty";
greg2 = [35, "car"]
concantenatedArr = helen2.concat(mary2, thomas2, greg2); 
console.log(concantenatedArr);

let arr, num, n;
arr = [1,2,3];
num = [7,8,9];
function numbers(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(numbers(...arr));
console.log(numbers(...num));

let myArr = [8, 10, 4, 6, 1];

let max = ( Math.max(...myArr) );
console.log(max);

let min= ( Math.min(...myArr) );
console.log(min);


