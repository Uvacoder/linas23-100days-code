/* 
Write a JavaScript program to create a new string of specified copies
(positive number) of a given string
*/


const repeat = (str,num)=>{
    // return str.repeat(num)
    var res = '';
    for(let i = 0 ; i<num ; i++){
        res += str;
    }
    return res;
}


console.log(repeat('abc',5))
console.log(repeat('vape',6))