let p1 = Promise.reject('Promise Rejected').catch((val)=>{
    console.log(val)
})