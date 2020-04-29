/* 
Write a JavaScript program to check whether a given fraction is proper or not.

Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.
*/

const proper_improper_test = arr =>{
    return Math.abs(arr[0]/arr[1]) < 1 ? 'proper fraction':'improper fraction';
}


console.log(proper_improper_test([12, 300]));
console.log(proper_improper_test([2, 4]));
console.log(proper_improper_test([103, 3]));
console.log(proper_improper_test([104, 2]));
console.log(proper_improper_test([5, 40]));