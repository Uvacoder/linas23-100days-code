/* 
Compute the sum of absolute differences of consecutive numbers of a given array of integers
*/

const sum_adjacent_difference = (arr)=>{

   /*  return arr.reduce((acc,el,index,array)=>{
        if(index < array.length-1){
            acc += Math.abs(array[index],array[index+1])
            console.log(acc)
        }
    },0) */
    let sum = 0 ;
    for(let i = 0 ; i<arr.length-1 ; i++){
        sum += Math.max(arr[i],arr[i+1])
    }
    return sum;
}


console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));