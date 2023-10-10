// for(var i = 0; i <= 5; i++){
//     setTimeout(function log(){
//         console.log(i)
//     },1000)
// }



//sol 1:- with using let
// for(let i = 0; i <= 5; i++){
//         setTimeout(function log(){
//             console.log(i)
//         },1000)
//     }


//sol 2:-  without using let
// for(var i = 0; i <=5 ; i++){
//     (function(){
//         var j = i;
//         setTimeout(function log(){

//             console.log(j)
//         }, 1000)
//     })()
// }



//q2:- 

// let i = 0
// for(; i<=5; i++){
//     setTimeout(function log(){
//         console.log(i)
//     },1000)
// }



// sol 1:- 

for(let i =0 ; i<=5; i++){
    setTimeout(function log(){
        console.log(i)
    },1000)
}