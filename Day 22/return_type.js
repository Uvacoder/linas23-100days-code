/* 
Write a JavaScript function which accepts an argument and returns the type.

Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. */


const return_type = arg => typeof arg;


console.log(return_type('string'))
console.log(return_type(null))
console.log(return_type(undefined))
console.log(return_type(23))
console.log(return_type({}))
console.log(return_type([]))