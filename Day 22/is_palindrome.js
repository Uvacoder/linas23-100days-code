/* 
Write a JavaScript function that checks whether a passed string is palindrome or not?

Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

const check_Palindrome = str =>{
    return str == str.toString().split("").reverse().join("");
}


console.log(check_Palindrome('madam'));
console.log(check_Palindrome('nurses run'));
console.log(check_Palindrome('fox'));