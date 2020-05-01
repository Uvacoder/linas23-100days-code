/* Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
 */

 const Second_Greatest_Lowest = arr =>{
        arr = arr.sort();
        return [arr[1],arr[arr.length -2]];
 }

console.log(Second_Greatest_Lowest([1,2,6,3,4,4,5]));
