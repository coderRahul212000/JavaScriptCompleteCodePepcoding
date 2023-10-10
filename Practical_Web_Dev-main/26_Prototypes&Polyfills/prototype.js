Array.prototype.myFunction = function(){
    console.log(this) //ye this hmare array ko point krega
}

let arr = [1,3,4,7]

arr.myFunction()