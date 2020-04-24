/* 
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
*/

const contins13 = (arr)=>{
    return arr.includes(1) || arr.includes(3)
}


console.log(contins13([1, 5]));  
console.log(contins13([2, 3]));  
console.log(contins13([7, 5])); 