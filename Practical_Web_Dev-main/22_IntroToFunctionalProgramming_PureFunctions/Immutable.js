// mutate way

// const person1 = {
//     name: 'Adam',
//     Age : 25
// }

// const person2 = person1

// person2.name = 'Steve' //issai dono objects k name change hojayenge
// // kyunki yahi hota hai reference data types mai ye reference store krte hai person2  k pass person1 ka reference isliye value change dono mai
// // ismai data mutate hogya hm jisko change ni krna chahre the woh bhi change hogya
// console.log(person1)
// console.log(person2)

//immutate way
// way 1 using Object.assign()
// const person1 = {
//     name: 'Adam',
//     Age : 25
// }

// const person2 = Object.assign({}, person1) //issai new reference milega is particular object k liye
// // issai hmara person1 object mutate ni hua ye waise ka waisa hi raha
// //issai hmne code ko immutable bnnadia
// person2.name = 'Steve' 
// console.log(person1)
// console.log(person2)

// way 2 using spread operator
const person1 = {
    name: 'Adam',
    Age : 25
}

const person2 = {...person1}

person2.name = 'Steve' 
console.log(person1)
console.log(person2)