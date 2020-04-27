/* 
Write a JavaScript program to find the maximum number from a given positive integer by deleting exactly one digit of the given number.
*/


const digit_delete = num=>{
    let result = 0;
    num = num.toString().split("");

    for(let i = 0 ; i<num.length; i++){
        let sum = 0 ; 
        for(let j=num.length -1; j>=0 ; j--){
            if(i !== j){
                sum+= 10*num[j];
            }
        }
        result = Math.max(sum,result);
    }

    return result;

    /* 
    let result = 0;
    const num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (let index_num = 0; index_num < num_digits.length; index_num++) {
        let n = 0;
        for (let i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
    */

}


console.log(digit_delete(100));
console.log(digit_delete(10));
console.log(digit_delete(1245)); 