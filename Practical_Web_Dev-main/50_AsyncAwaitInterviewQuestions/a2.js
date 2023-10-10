let p = new Promise(function (resolve, reject){
    reject(new Error("some error"));
    setTimeout(function(){
        reject(new Error("some error"));
    }, 1000)
    reject(new Error("some error"));
});

p.then(null, function(err){ // is statement mai ayega kyunki then mai 2 callback function hote hai pehle success callback function and doosra failure callback function and success cb mai hmne null pass kia hai mtlb kuch pass hi ni kia hai toh iske pass sirf failure cb hai toh catch mai ni gya iske pass hi agya
    console.log(1);
    console.log(err);

}).catch(function (err){
    console.log(2);
    console.log(err)
})