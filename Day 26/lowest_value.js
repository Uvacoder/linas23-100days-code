/* Write a JavaScript function to find the lowest value in an array.

Test Data :
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));
1
-56 */

const min = arr =>{
    return Math.min.apply(null,arr);
}


console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));