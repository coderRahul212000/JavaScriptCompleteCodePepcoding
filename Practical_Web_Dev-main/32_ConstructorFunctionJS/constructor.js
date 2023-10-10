function car( brand,model,color){
    this.Brand = brand
    this.Model = model
    this.Color = color

    this.drive = function(){
        console.log("I am driving " + this.Model)
    }
}

let car1 = new car('BMW', "X5", "white") //this->empty object
let car2 = new car('Mercedes', "S class", "Red") //this->empty object

// car1.Brand = "Jaguar"
// console.log(car2)
// console.log(car1.Model)
// console.log(car2.Color)

car1.drive()
car2.drive()