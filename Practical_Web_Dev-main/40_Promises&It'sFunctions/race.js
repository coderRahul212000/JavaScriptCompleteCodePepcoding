// let p1 = new Promise(function(resolve, reject) {
//     resolve('Promise 1 is resolved')
// })

// let p2 = new Promise(function(resolve, reject) {
//     resolve('Promise 2 is resolved')
// })

// let p3 = new Promise(function(resolve, reject) {
//     resolve('Promise 3 is resolved')
// })

//  Promise.race([p1, p2, p3]).then((val)=>{
//     console.log(val)
//  })





// let p1 = new Promise(function(resolve, reject) {
//     resolve('Promise 1 is resolved')
// })

// let p2 = new Promise(function(resolve, reject) {
//     reject('Promise 2 is rejeted')
// })

// let p3 = new Promise(function(resolve, reject) {
//     resolve('Promise 3 is resolved')
// })

//  Promise.race([p1, p2, p3]).then((val)=>{
//     console.log(val)
//  })


//ismai pehhla promise reject hogya toh usko return krdega baki k promises ko ni dekhega
// let p1 = new Promise(function(resolve, reject) {
//     reject('Promise 1 is rejected')
// })

// let p2 = new Promise(function(resolve, reject) {
//     reject('Promise 2 is rejeted')
// })

// let p3 = new Promise(function(resolve, reject) {
//     resolve('Promise 3 is resolved')
// })

//  Promise.race([p1, p2, p3]).then((val)=>{
//     console.log(val)
//  }).catch((err)=>{
//     console.log(err)
//  })




// jo promise pehle resolve hogya oosi k according race function o/p return krdeta hai
let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Promise 1 is resolved')
}, 2000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Promise 2 is resolved')
}, 1000)
})

Promise.race([p1, p2]).then((val) => {
    console.log(val)
})
