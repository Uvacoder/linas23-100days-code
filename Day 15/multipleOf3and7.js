/* 
 Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
*/


const multiple37 = (num)=>{
    return num % 3 == 0 && num % 7 == 0;
}

console.log(multiple37(21))
console.log(multiple37(24))
console.log(multiple37(63))