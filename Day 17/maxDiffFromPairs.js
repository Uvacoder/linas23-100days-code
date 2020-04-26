/* 
Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
*/

const array_max_diff = (arr)=>{
    let max = -1;
    let diff;

    for(let i = 0 ;i < arr.length -1; i++){
        for(let j = i+1; j < arr.length ; j++ ){
            diff = Math.abs(arr[i] - arr[j])
            max = Math.max(max,diff);
        }
    }

    return max;

}



console.log(array_max_diff([1, 2, 3, 8, 9]))
console.log(array_max_diff([1, 2, 3, 18, 9]))
console.log(array_max_diff([13, 2, 3, 8, 9]))