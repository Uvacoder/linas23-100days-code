/* 
Write a JavaScript program to move last three character
to the start of a given string.
The string length must be greater or equal to three. 
*/

const returnThreeChar =(str)=>{
    return str.slice(str.length-3,str.length) + str.slice(0,str.length-3)
}


console.log(returnThreeChar('returnMe'))
console.log(returnThreeChar('storytellers'))
console.log(returnThreeChar('subscribe'))