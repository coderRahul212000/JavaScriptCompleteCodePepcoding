// impure function
// ek function ko hm same arguments dere hai but woh hume bar bar different arguments dega ye ek impure function hai kyunki ye external factor pr depend kr ra hai woh hai variable a;
// or koi bhi function external factor pr depend na kre ye  function programming ka rule hai
// let a = 4

// function addNum(b){
//     console.log('The sum is', a+b)
// }

// addNum(2)
// addNum(2)


//pure function
// esa function jisko jb ap same arguments sai call karo toh same output return kre
// function addNum(a,b){
//     console.log('the sum is ', a+b) //side effect hai ye console.log yahan pr kyunki pure function ki defination hai same arguments k liye same output ana chahiye lekin function programming hmko ek or cheez add krke deti hai ki hmara state mutate ni hona chahiye mtlb oos function k result k ilava apke kisi bhi external factor mai koi change ni ana chahiye pr console.log hmari external screen use krta hai or wahan console.log ka output dega toh kya hua oss function ka sirf wohi dayra ni raha  oos function nai kisi external  factor ko bhi change krdia wahan koi value dedi or yee cheez hoti hai side effects
//     // hm zyadatar ye chahte hai ki hm in sideeffects ko avoid kre
// }

// addNum(2,3)

//side effects ko remove krke code esa hoga impurity htakar
function addNum(a,b){
    return a+b
}
    console.log(addNum(2,3))