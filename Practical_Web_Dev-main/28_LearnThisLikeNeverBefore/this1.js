// this keyword in node with non strict mode

// console.log(this)  // returns an empty object

// function showThis(){ 
//     console.log(this) // will return a global object
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
         console.log(this)  // global object
       }
       g()
    }
}

obj.f()

