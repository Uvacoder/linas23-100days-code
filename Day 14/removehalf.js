/* 
 Write a JavaScript program to extract the first half of a string 
 of even length.  Go to the editor
*/

const repeatHalf = (str)=>{
    return str.length % 2 != 0 ? `the length of the string is odd.`: str.substr(0,str.length/2);
}



console.log(repeatHalf('javascript'))
console.log(repeatHalf('java'))
console.log(repeatHalf('python'))
console.log(repeatHalf('javas'))

