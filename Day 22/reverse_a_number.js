/* 
Write a JavaScript function that reverse a number.
Sample Data and output:
Example x = 32243;
Expected Output: 34223
*/

const reverse_a_number = num =>{

    /* let result = [];
    while(num > 0){
        result.push(num%10);
        num = Math.floor(num / 10);
    }
    return result.join(""); */

    return num.toString().split("").reverse().join("");
}


console.log(reverse_a_number(32243));