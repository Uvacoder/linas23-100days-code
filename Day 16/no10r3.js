/* 
Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.
*/


const is13 = (arr) => !arr.includes(1) && !arr.includes(3);

console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1])); 