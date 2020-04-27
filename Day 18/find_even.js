/* 
Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

Sample sequence = [1,2,3,4,5,6,7,8]
Given number: 5
Output: 2
*/


const find_numbers = (arr,num) =>{

    var even = 0;

    arr.forEach(el=>{
        if(el < num && el % 2 == 0){
            even++
        }
    })
    return even;
    
}


console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
console.log(find_numbers([1,3,5,6,7,8], 9))