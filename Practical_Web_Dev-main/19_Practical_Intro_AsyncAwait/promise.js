// Promise based function
function placeOrder(drink){
    return new Promise(function(resolve , reject){
        if(drink === 'coffee'){
            resolve('Order Placed')

        }else{
            reject('Sorry, we only Serve Coffee')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed')
        resolve(`Coffee Served for the ${order}`)
    })
}

//Scenario with Promises

// placeOrder('coffee').then(function(orderFromCustomer){
//     console.log('Request Recieved')
//     let orderIsProcessed = processOrder(orderFromCustomer)
//     return orderIsProcessed
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed)
// }).catch(function(err){
//     console.log(err)
// })


// placeOrder('tea').then(function(orderFromCustomer){
//     console.log('Request Recieved')
//     let orderIsProcessed = processOrder(orderFromCustomer)
//     return orderIsProcessed
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed)
// }).catch(function(err){
//     console.log(err)
// })


//Async-await

//  async function serverOrder(){


//     const orderRecieved = await placeOrder('coffee')
//     console.log(orderRecieved)
//     const processedOrder = await processOrder(orderRecieved)
//     console.log(processedOrder)
//  }



 async function serverOrder(){

    try {
        const orderRecieved = await placeOrder('coffee')
        console.log(orderRecieved)
        const processedOrder = await processOrder(orderRecieved)
        console.log(processedOrder)

    } catch (error) {
         console.log(error)
    }
    
 }



 serverOrder()