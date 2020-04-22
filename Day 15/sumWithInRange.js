/* 
Write a JavaScript program to compute the sum of the two given integers,
If the sum is in the range 50..80 return 65 other wise return 80.
*/

const sumWithInRange = (a,b)=>{
    return a+b > 50 ? a+b < 80 ? 65 :80 :80;
}


console.log(sumWithInRange(40,13))
console.log(sumWithInRange(40,23))
console.log(sumWithInRange(40,3))