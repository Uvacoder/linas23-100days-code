/* 
Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.
*/

const int_sum = num=>{
    let res = 0;
    while(num > 0){
        res +=num;
        num = Math.floor(num/2);
    }

    return res;
}


console.log(int_sum(8))
console.log(int_sum(9))
console.log(int_sum(26))