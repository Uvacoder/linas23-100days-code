/* Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2

Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
 */

 const subset = (arr,length) =>{
     let res = [];
     for(let i = 0 ; i<arr.length; i++){
         for(let j = 0 ; j<arr.length ; j++){
            if(arr[i] !== arr[j] && arr[i] > arr[j]){
                res.push([arr[i],arr[j]]);
            }
         }
     }
     return res.concat([arr.reverse()]);
 }

console.log(subset([1, 2, 3], 2));
