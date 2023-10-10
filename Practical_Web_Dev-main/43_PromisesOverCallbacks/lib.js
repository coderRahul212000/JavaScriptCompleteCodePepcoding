// function updateAccount(product, cb) {
//     setTimeout(()=>{
//         console.log(product, ' purchased')
//         cb()
//     }, 2000)
// }

// module.exports = {
//     updateAccount : updateAccount
// }


//ab manlo mai galti sai cb() ko 2 baar or call lgau issai hmara ghata hojayega or esi galti hi na ho iske liye ab hm dekhenge promises
// function updateAccount(product, cb) {
//     setTimeout(()=>{
//         console.log(product, ' purchased')
//         cb()
//         cb()
//         cb()
//     }, 2000)
// }

// module.exports = {
//     updateAccount : updateAccount
// }




//with promises
function updateAccount(product, cb) {
    setTimeout(()=>{
        console.log(product, ' purchased')
        cb()
        cb()
        cb()
    }, 2000)
}

function promiseUpdateAccount(product){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve()
        })
    })
}

module.exports = {
    updateAccount : updateAccount,
    promiseUpdateAccount : promiseUpdateAccount
}