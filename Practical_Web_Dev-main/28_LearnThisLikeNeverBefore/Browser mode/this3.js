// this in browser non strict

// console.log(this)  //window object return hota hai



// function showThis() {
//     console.log(this) //window object milega
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
            console.log(this) //window object milega
        }
        g()
    }
}

obj.f()



