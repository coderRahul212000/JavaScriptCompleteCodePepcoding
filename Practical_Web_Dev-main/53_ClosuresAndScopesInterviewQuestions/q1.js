(function immediateA(a){
    return (function immediateB(b){
        console.log(a)
        //what is logged ?

    })(1);
})(0);

//solution:-
// hmne console.log kia hai a or a ko hm 0 dere hai  isliye 0 print hua