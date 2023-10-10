// function test(){
//     let a = 1+1
//     return new Promise(function(resolve,reject){
//         if(a===2){
//             resolve('Promise Resolved Yessssss')
//         }else{
//             reject('Promise rejected Noooooo')
//         }
//     })
// }


// test().then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)
// })





// function test(){
//     let a = 1+3
//     return new Promise(function(resolve,reject){
//         if(a===2){
//             resolve('Promise Resolved Yessssss')
//         }else{
//             reject('Promise rejected Noooooo')
//         }
//     })
// }


// test().then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)
// })



// function test(){
//     let a = 1+1
//     return new Promise(function(resolve,reject){
//         if(a===2){
//             resolve('Promise Resolved Yessssss')
//         }else{
//             reject('Promise rejected Noooooo')
//         }
//     })
// }


// test().then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('Experiment Completed')
// })



// function test(){
//     let a = 1+3
//     return new Promise(function(resolve,reject){
//         if(a===2){
//             resolve('Promise Resolved Yessssss')
//         }else{
//             reject('Promise rejected Noooooo')
//         }
//     })
// }


// test().then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('Experiment Completed')
// })




var loader = true
function test(){
    let a = 1+3
    return new Promise(function(resolve,reject){
        if(a===2){
            resolve('Promise Resolved Yessssss')
        }else{
            reject('Promise rejected Noooooo')
        }
    })
}


test().then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    loader = false
})