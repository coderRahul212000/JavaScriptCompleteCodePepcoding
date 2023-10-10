let p1 = new Promise(function(resolve, reject) {
    resolve('Promise 1 is resolved')
})

let p2 = new Promise(function(resolve, reject) {
    reject('Promise 2 is rejected')
})

let p3 = new Promise(function(resolve, reject) {
    resolve('Promise 3 is resolved')
})


let promiseAll = Promise.all([p1,p2,p3])  // ismai ye cheez bhi hoti hai ki agar ek promise bhi reject hota hai toh reject msg mil jayega or baki koi bhi promise resolve ni hoga
promiseAll.then((PromiseArr)=>{
    console.log(PromiseArr)
}).catch((err)=>{
    console.log(err)
})