//ismai bhi code k ouput alag alag ayenge  
const fs = require('fs')

let fileRead1 = fs.promises.readFile('./f1.txt') //issai ye poora ek promise return krne lgega
// console.log(fileRead1)

let fileRead2 = fs.promises.readFile('./f2.txt') //issai ye poora ek promise return krne lgega

let fileRead3 = fs.promises.readFile('./f3.txt') //issai ye poora ek promise return krne lgega

fileRead1.then((data)=>{
    console.log('data ->' +  data)
})

fileRead2.then((data)=>{
    console.log('data ->' + data)
})

fileRead3.then((data)=>{
    console.log('data ->' + data)
})