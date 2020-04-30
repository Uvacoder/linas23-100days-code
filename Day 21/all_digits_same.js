/* 
Write a JavaScript program to check whether all the digits in a given number are the same or not.
*/

const test_same_digit = num =>{
    num = num.toString().split("");

    return num.every(digit=> digit == num[0]);

}


console.log(test_same_digit(1234));
console.log(test_same_digit(1111));
console.log(test_same_digit(22222222));