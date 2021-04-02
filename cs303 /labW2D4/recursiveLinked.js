//"use strict"
//module.exports = {printList,printListReverse,};

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
console.log(contains(homer, "Abe"));
console.log(contains(homer, "Maggie")); 
