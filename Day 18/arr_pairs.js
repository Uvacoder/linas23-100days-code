/* Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers 
such that one element in the pair is divisible by the other one.

For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
The output of [2, 4, 6] -> 2 - (2,4), (2,6)
The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16) */


const arr_pairs = arr =>{
    let pairs = [];

    for(let i = 0 ; i<arr.length ; i++){
        for(let j = 1 ; j <= arr.length ; j++ ){
            if(arr[j]%arr[i] == 0 && arr[j] != arr[i]){
                pairs.push([arr[i],arr[j]])
            }
        }
    }

    return pairs.length;


}




console.log(arr_pairs([1,2,3]))
console.log(arr_pairs([2,4,6]))
console.log(arr_pairs([2,4,16]))