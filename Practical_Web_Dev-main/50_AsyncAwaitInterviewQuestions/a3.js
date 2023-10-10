async function f1(){
    console.log(1)
}

async function f1(){ // ye ooper wale f1 ko oveerirde krdega
    console.log(2)
}

console.log(3)
f1();
console.log(1)
f2();

async function f2(){
    console.log("Go!") 
}

