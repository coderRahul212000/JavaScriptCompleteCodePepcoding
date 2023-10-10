// find output:
async function inc(x){
    x = x + await 1  // await 1 toh 1 hi dega
    return x;
}

async function increment(x){
    x = x + 1
    return x
}

inc(1).then(function(x){
    increment(x).then(function(x){
        console.log(x) // output 3 ayega
    })
})