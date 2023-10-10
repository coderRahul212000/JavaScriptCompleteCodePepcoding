// this keyword in node with  strict mode

'use strict'

// console.log(this)  // returns an empty object

// function showThis(){ 
//     console.log(this) // will return undefined
// }

// showThis()


// let obj = {
//     name : 'adam',
//     f: function(){
//         console.log(this)  // ye poora object mil jayega
//     }
// }

// obj.f()



let obj = {
    name : 'adam',
    f: function(){
       function g(){
         console.log(this)  // undefined
       }
       g()
    }
}

obj.f()

