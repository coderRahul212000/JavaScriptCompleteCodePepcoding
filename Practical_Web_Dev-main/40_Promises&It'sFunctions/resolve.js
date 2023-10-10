// let p1 = Promise.resolve()
// console.log(p1)

// let p1 = Promise.resolve('Promise Resolved')
// console.log(p1)


let p1 = Promise.resolve('Promise Resolved').then((val)=>{
    console.log(val)
})
