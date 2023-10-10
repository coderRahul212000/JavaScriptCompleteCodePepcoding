let count = 0;
(function immediate(){
    if(count === 0){
        let count = 1;
        console.log(count); //what is logged?
    }
    console.log(count); //what is logged
})();

//solution
// 1st log mai local wala count ki value print hogi and 2nd log mai gloobal scope sai ara hai