/* 
Write a JavaScript program to check from two given integers 
whether one of them is 8 or their sum or difference is 8.
*/

const isEight = (a,b)=>{
    return a == 8 || b== 8 || a+b == 8 || Math.abs(a-b) == 8;
}


console.log(isEight(12,8))
console.log(isEight(12,13))
console.log(isEight(0,8))
console.log(isEight(4,4))