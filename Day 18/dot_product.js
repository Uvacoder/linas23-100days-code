/* 
Write a JavaScript program to create the dot products of two given 3D vectors.

Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
*/

const dot_product = (arr1,arr2) =>{
    let result = 0;
    for(let i = 0 ; i< 3; i++){
        result += arr1[i] * arr2[i];
    }
    return result;
}



console.log(dot_product([1,2,3], [1,2,3]))
console.log(dot_product([2,4,6], [2,4,6]))
console.log(dot_product([1,1,1], [0,1,-1])) 