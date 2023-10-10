let p = new Promise(function (resolve, reject){
    reject(new Error("some error"));
    setTimeout(function(){
        reject(new Error("some error"));
    },1000)
    reject(new Error("some error"));
});

p.then(null, function(err){  // yahan success callback mai null pass kia hua hai or success callback to hai hi ni toh failure callback run hora tha isliye o/p 1 aya
    console.log(1);
    console.log(err);
}).catch(function(err){
    console.log(2);
    console.log(err);
})