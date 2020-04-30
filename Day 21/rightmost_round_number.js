/* 
Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number.
Note: A round number is informally considered to be an integer that ends with one or more zeros.
*/


const find_rightmost_round_number = arr =>{
    let result ;
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i] % 10 == 0){
            result = i;
        }
    }
    return `right most round number index is ${result ? result : '0' }`;
}


console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));