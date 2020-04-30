/* 
Write a JavaScript program to swap two halves of a given array of integers of even length.
*/

const halv_array_swap = arr =>{
    for(let i = 0 ; i<arr.length / 2 ; i++){
        let temp = arr[i];

        arr[i] = arr[i + arr.length/2];
        arr[i + arr.length/2] = temp;
    }
    return arr.length % 2 == 0 ? arr : false;
}


console.log(halv_array_swap([1,2,3,4,5,6]))
console.log(halv_array_swap([1,2,3,4,5,6,7]))