/* 
Write a JavaScript program to create a string using 
the middle three characters of a given string of odd length. 
The string length must be greater or equal to three.
*/

const returnMiddleThree = (str)=>{
    return str.length % 2 == 0 ? 'even length is not accepted.' : str.slice((str.length/2) -1 ,(str.length/2)+2) ;
}




console.log(returnMiddleThree('returnme'))
console.log(returnMiddleThree('youtube'))
console.log(returnMiddleThree('comedians'))
console.log(returnMiddleThree('abcdefg'))