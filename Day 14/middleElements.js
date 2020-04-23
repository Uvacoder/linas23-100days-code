/* 
 Create a new array taking the middle elements of the two 
 arrays of integer and each length 3
*/

const middle_elements = (arr1,arr2)=>{
    return [arr1[Math.floor(arr1.length/2)],arr2[Math.floor(arr2.length/2)]]
}



console.log(middle_elements([1, 2, 3], [1, 5, 6]));  
console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
console.log(middle_elements([4, 2, 7], [2, 4, 5]));