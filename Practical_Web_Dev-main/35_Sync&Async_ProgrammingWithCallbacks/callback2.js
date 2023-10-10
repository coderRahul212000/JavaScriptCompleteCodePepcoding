//Async callbacks

console.log('Hello')



setTimeout(function st1(){
    console.log('I am st1')
}, 2000)

setTimeout(function st2(){
    console.log('I am st2')
}, 1000)

function sayBye() {
    console.log('bye')
}

sayBye()  //yahan pr settimeouts nai kaam roka ni ki mai pehle chlu fir niche wala chalega