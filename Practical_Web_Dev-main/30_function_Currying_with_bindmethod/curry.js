// function currying using bind

// function add(a,b){
//     console.log(a+b)
// }

// let addwith2 = add.bind(this , 2) //this add function ko refer kr ra hai and 2 a ki value ko
// addwith2(5)





// function add(a,b){
//     console.log(a+b)
// }

// let addwith2 = add.bind(this) 
// addwith2(2,4)



function add(a,b){
        console.log(a+b)
    }
    
    let addwith2 = add.bind(this,2 ,5) 
    addwith2()