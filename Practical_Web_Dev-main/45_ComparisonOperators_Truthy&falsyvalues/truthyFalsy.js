// let a = 2

// if (a === 2) {
//     console.log('Yes Equal')
// }else{
//     console.log('no Not Equal')
// }



// let a = 2 // iski value boolean mai set hogai true isko bolte hai truthy value

// if (a) { //if mai true condition hai toh chal gya ye
//     console.log('Yes Equal') //abhi bhi yahi run hoga
// }else{
//     console.log('no Not Equal')
// }




function testTruthyFalsy(val) {
    return val ? console.log('truthy') : console.log('falsy')
}

// testTruthyFalsy(false)
// testTruthyFalsy('')
// testTruthyFalsy(0)
// testTruthyFalsy(+0)
// testTruthyFalsy(-0)
// testTruthyFalsy(-4)
// testTruthyFalsy(null)
// testTruthyFalsy(new Boolean(false)) //yahan new object bnaya hai