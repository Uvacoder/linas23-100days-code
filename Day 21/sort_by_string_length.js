/* 
Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.

Note: Do not change the order if the lengths of two string are same.

*/

const sort_by_string_length = arr =>{

    for(let i = 0 ; i<arr.length ; i++){
        for(let j = i+1; j<arr.length ; j++){
            if(arr[i].length > arr[j].length){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
   
    return arr;

}


var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
console.log("Original array: "+ arra+"\n");
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));