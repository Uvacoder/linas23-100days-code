/* 
Write a JavaScript program to find a value which is nearest to 100 
from two different given integer values
*/

const near100 = (a,b)=>{
    return 100 - a < 100 - b ? a:b;
}

console.log(near100(95,90))
console.log(near100(50,55))