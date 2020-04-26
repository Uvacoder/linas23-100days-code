/* 
Write a JavaScript program to find the kth greatest element of a given array of integers.
*/


const Kth_greatest_in_array= (arr, k) =>{
    return arr.sort((a,b)=> b - a)[k-1];
}


console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))