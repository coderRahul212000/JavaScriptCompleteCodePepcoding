// let person1 = {
//     name : 'Adam',
//     age : 25
// }

// let showDetails = function(){
//     console.log(this.name + " " + this.age)
// }

// let showDetailsBind = showDetails.bind(person1)
// showDetailsBind()



// let person1 = {
//     name : 'Adam',
//     age : 25
// }

// let showDetails = function(city, state){
//     console.log(this.name + " " + this.age + ' '+ city + ' '+ state)
// }

// let showDetailsBind = showDetails.bind(person1, "Noida", "UP")
// showDetailsBind()



let person1 = {
    name : 'Adam',
    age : 25
}

let showDetails = function(city, state){
    console.log(this.name + " " + this.age + ' ' + city + ' ' + state)
}

let showDetailsBind = showDetails.bind(person1, 'Noida')
showDetailsBind('UP')

Function.prototype.myBind = function(...args){
    let obj = this
    params = args.slice(1)
    return function(...args2){
        obj.apply(args[0] , [...params , ...args2])
    }
}

let showDetailsMyBind = showDetails.myBind(person1, 'Lucknow')
showDetailsMyBind('UP')




