// this in browser  strict mode

'use strict'

// console.log(this)  //window object return hota hai



// function showThis() {
//     console.log(this) //undefined milega
// }

// showThis()



// let obj = {
//     name:'Adam',
//     f: function() {
//         console.log(this)  // object itself milega
//     }
// }

// obj.f()




let obj = {
    name:'Adam',
    f: function() {
        function g() {
            console.log(this) //undefined milega
        }
        g()
    }
}

obj.f()



