/* 
Write a JavaScript program to check whether 1 appears in first or last
position of a given array of integers.
The array length must be greater or equal to 1.
*/

const isone = (arr)=>{
    return arr[0] == 1 || arr[arr.length-1] ==1
}

console.log(isone([1,2,34,5]))
console.log(isone([1,2,2,1]))
console.log(isone([0,2,2,3]))