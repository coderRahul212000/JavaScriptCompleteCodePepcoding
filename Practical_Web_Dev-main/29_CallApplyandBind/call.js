// let person1 = {
//     name : 'Adam',
//     age: 25,
//     showDetails: function(){
//         console.log(this.name + " is " + this.age + " years old")
//     }
// }

// let person2 = {
//     name: 'Steve',
//     age: 20,
//     showDetails: function(){
//         console.log(this.name + " is " + this.age + " years old")
//     }
// }

// person1.showDetails()
// person2.showDetails()












//call method -> function borrowing
// let person1 = {
//         name : 'Adam',
//         age: 25,

//         showDetails: function(){
//             console.log(this.name + " is " + this.age + " years old")
//         }
//     }
    
//     let person2 = {
//         name: 'Steve',
//         age: 20,
        
//     }

//     person1.showDetails.call(person2)
    
   

//defining showDetails globally
// let person1 = {
//         name : 'Adam',
//         age: 25,

        
//     }
   
// let person2 = {
//         name: 'Steve',
//         age: 20,
        
//     }


// let showDetails = function(){
//     console.log(this.name + " is " + this.age + " years old")
// }    

// showDetails.call(person2)    
// showDetails.call(person1)    




// with arguments
// let person1 = {
//     name : 'Adam',
//     age: 25,

    
// }

// let person2 = {
//     name: 'Steve',
//     age: 20,
    
// }


// let showDetails = function(city, car){
// console.log(`${this.name} is ${this.age} years old , he lives in ${city} and he drives ${car}`)
// }    

// showDetails.call(person1 , "Noida", "BMW")    
