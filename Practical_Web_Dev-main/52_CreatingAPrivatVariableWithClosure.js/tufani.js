 let myFunction = (function(){
    let name = '' // private hai ye 
    //reason: kyunki hm isko function scope k bahar bina return kiye access ni kr skte

    getName = function(){
        return name
    }

    setName = function(newName){
        name = newName

    }

    return {
        getName : getName,
        setName : setName
    }
 }())


//  myFunction.setName('Alex')
//  console.log(myFunction.getName())

myFunction.setName('Martin')
 console.log(myFunction.getName())

 console.log(myFunction.name) //directly access ni kr para name ko kyunki hmne name ko bnadia private