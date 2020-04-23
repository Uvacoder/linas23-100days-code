/* 
Write a JavaScript program to create a new string 
taking the first and last n characters from a given string.
The string length must be greater or equal to n.
*/

const two_string = (str,num)=>{
    return str.slice(0,num) + str.slice(str.length - num , str.length);
}


console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));