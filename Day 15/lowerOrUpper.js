/*
Write a JavaScript program to create new string with first 3 characters are in lower case 
from a given string. If the string length is less than 3 convert all the characters in upper case.
*/

const lowerOrUpper = (str)=>{
    return str.length < 3 ? str.toUpperCase(): str.substr(0,3).toLowerCase() + str.substr(3)
}


console.log(lowerOrUpper('helloWorld'))
console.log(lowerOrUpper('HELL'))
console.log(lowerOrUpper('an'))
console.log(lowerOrUpper('ANT'))
console.log(lowerOrUpper('I WAS CAPITAL'))
