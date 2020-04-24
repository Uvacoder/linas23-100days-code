/* 
Write a JavaScript program to swap the first and last elements of a given array of integers. 
The array length should be at least 1.
*/

const swap = (arr)=>{
    [arr[0],arr[arr.length-1]] = [arr[arr.length-1],arr[0]];

    return arr;

}


console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3])); 