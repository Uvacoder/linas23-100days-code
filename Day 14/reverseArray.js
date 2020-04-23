/* 
Write a JavaScript program to reverse the elements of a given array of integers length 3.
*/

const reverseArray = (arr)=>{
    return arr.map((el,index,array)=>{
        return array[(arr.length-1) - index] 
    })
}


console.log(reverseArray([3,4,5]))
console.log(reverseArray([1,34]))
console.log(reverseArray([1,34,23,5]))