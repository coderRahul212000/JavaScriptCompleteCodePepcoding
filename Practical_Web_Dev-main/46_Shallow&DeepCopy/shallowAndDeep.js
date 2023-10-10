/* let arr =  [1, 2, 3, 4]
let copyArr = arr

copyArr[1] = 4 // issai original array pr bhi modification honge

console.log(arr)
console.log(copyArr) */


// spread operator method -> shallow copies create hoti hai - upper level pr hi separate copy create hoti hai ie: cricket , football, swimming upper level pr hai or ye {} lower level pr
/*let sports = ['Cricket', 'Football', 'Swimming']
let copySports = [...sports]
copySports[1] = 'Baseball'
console.log('Original Sports Array', sports)
console.log('Copy Sports Array', copySports)*/


/*let sports = ['Cricket', 'Football', 'Swimming', {a:'hockey', b: 'Tennis'}]
let copySports = [...sports]
copySports[1] = 'Baseball'
copySports[3]['a'] = 'Basketball'
console.log('Original Sports Array', sports)
console.log('Copy Sports Array', copySports) */



// shallow Copies create krne ka second way Array.from
/*let sports = ['Cricket', 'Football', 'Swimming', {a:'hockey', b: 'Tennis'}]
let copySports = Array.from(sports)
copySports[1] = 'Baseball'
copySports[3]['a'] = 'Basketball'
console.log('Original Sports Array', sports)
console.log('Copy Sports Array', copySports) */

// Shallow copies create krne ka 3rd way
/*let sports = ['Cricket', 'Football', 'Swimming', {a:'hockey', b: 'Tennis'}]
let copySports = sports.slice(0)
copySports[1] = 'Baseball'
copySports[3]['a'] = 'Basketball'
console.log('Original Sports Array', sports)
console.log('Copy Sports Array', copySports) */


// Deep Copy
/* 
let sports = ['Cricket', 'Football', 'Swimming', {a:'hockey', b: 'Tennis'}]
let copySports = JSON.parse(JSON.stringify(sports))
copySports[1] = 'Baseball'
copySports[3]['a'] = 'Basketball'
console.log('Original Sports Array', sports)
console.log('Copy Sports Array', copySports) */

/* issai bhi dono jgah change hoga
let obj = {
    name: 'Adam',
    age: 25
}

let newObj = obj
newObj.name = 'Steve'
console.log(obj)
console.log(newObj)  */


// shallow copy in objects
 /*  
 let obj = {
    name: 'Adam',
    age: 25
}

let newObj = {...obj}
newObj.name = 'Steve'
console.log(obj)
console.log(newObj) */


/* let person = {
    name: 'Mrinal',
    age: 22,
    hobbies: ['sports', 'coding', 'music']
}

let newPerson = Object.assign({}, person)
newPerson.age = 40
newPerson.hobbies[1] = 'Programming'
console.log(person)
console.log(newPerson)
*/

// Deep copy in objects

/* let person = {
    name: 'Mrinal',
    age : 22,
    hobbies : ['sports', 'coding', 'music']
}

let newPerson = JSON.parse(JSON.stringify(person))

newPerson.age = 23
newPerson.hobbies[0] = 'dancing'
console.log(person)
console.log(newPerson)  */

