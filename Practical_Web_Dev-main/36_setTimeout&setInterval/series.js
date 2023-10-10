// ismai hm callbacks ko sequence mai krdenge ki pehle k baad doosra run ho fir teesra

let fs = require("fs")
console.log("Before")  
fs.readFile("f1.txt", cb) 

function cb(err, content){
    console.log("content" + content);
    fs.readFile("f2.txt", cb1);
    function cb1(err, content){
        console.log("content" + content);

        fs.readFile("f3.txt", cb2);
        function cb2(err, content){
            console.log("content" + content);
        }
    }
}

console.log("After")