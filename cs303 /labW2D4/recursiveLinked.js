//"use strict"
//module.exports = {};

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
  

  function printList(list) {
    

    if (list) {
      return  list.name+""+ printList(list.next) // do the same for the rest of the list
    }
    return ""
  
  }
  
//console.log(printList(list))
  

function printListReverse(list) {

  
    if (list) {
      return  printListReverse(list.next)+ list.name+"" // do the same for the rest of the list
    }
    return ""
  
  }
  //console.log(printListReverse(list))
 