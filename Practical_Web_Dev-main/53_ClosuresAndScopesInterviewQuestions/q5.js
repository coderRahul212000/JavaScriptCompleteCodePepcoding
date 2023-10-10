for( var i = 0; i < 3; i++){
    delay(i)
}

function delay(i){
    setTimeout(function log(){
        console.log(i) //what is logged?
    })
}