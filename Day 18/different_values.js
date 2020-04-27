// Write a JavaScript program to find two elements of the array such 
// that their absolute difference is not greater than a given integer 
// but is as close to the said integer.


const different_values = (arr,num)=>{
    var max_diff = -1;

    for(let i = 1 ; i< arr.length ; i++){
        let diff = Math.abs(arr[i]-arr[i-1]);
        if(diff <= num){
            max_diff = Math.max(max_diff,diff);
        }
    }

    return max_diff;

}



console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));