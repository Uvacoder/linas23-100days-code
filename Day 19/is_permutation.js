/* 
Write a JavaScript program to find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer.
*/

const is_permutation = (arr,num) =>{
    
    let truthy = arr.every(el=>{
        return el <= num; 
    }) && arr.length == num;


    if(truthy) return true;

    return false;

}


console.log(is_permutation([1, 2, 3, 4, 5,6,7], 7));
console.log(is_permutation([1, 2, 3, 5], 5));