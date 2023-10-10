function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }
    let message = `Count is ${count}`;
    function log(){
        console.log(message)
    }

    return[increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); //what is logged?


//solution
// count++ sai increment() function k andr hi increment hora hai
