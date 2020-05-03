/* Write a JavaScript program to compute the sum of an array of integers.

Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 */

const array_sum = arr =>{

    if(arr.length == 1) return arr[0];

    return arr.pop() + array_sum(arr);


}



console.log(array_sum([1,2,3,4,5,6]));
