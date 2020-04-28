/* 
Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.
*/

const trailing_zeros_factorial = num=>{
    let factorial = 1;
    let res = 0 ;


    for(let i = num ; i >= 1 ; i-- ){
        factorial *= i;
    }


    factorial = factorial.toString().split('');

    while(factorial.pop() == 0){
        res++;
    }

    return res;

    /* 
     var result = 0;
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
    */

}



console.log(trailing_zeros_factorial(8))
console.log(trailing_zeros_factorial(9))
console.log(trailing_zeros_factorial(10))