// for(var i = 0; i < 3; i++){
//     setTimeout(function log(){
//         console.log(i) //what is logged?
//     }, 1000);
// }

// Note:- var function scoped hota hai and let block scoped keyword hai mtlb hr baar new reference bnega i k liye but var mai ek hi reference chnge hora hai bcoz function scoped hai

//solution
//settimeout node api's mai jayega isliye 3 3 3 output ayega


for(let i = 0; i < 3; i++){
    setTimeout(function log(){
        console.log(i) //what is logged?
    }, 1000);
}
