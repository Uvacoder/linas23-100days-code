/* 
Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
*/

const array_element_replace =  (arr,x,y) =>{
    while(arr.indexOf(x) != -1) {
        arr[arr.indexOf(x)] = y;
    }

    return arr;
}





num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log(`Original Array: ${num}`);
console.log(array_element_replace(num, 2, 9));