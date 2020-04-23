/* 
Write a JavaScript program to create a new string of 4 copies
of the last 3 characters of a given original string. 
The length of the given string must be 3 and above.
*/

const repeatIf = (str)=>{
    return str.length < 3 ? str : str + str.slice(str.length-3,str.length).repeat(3);
}



console.log(repeatIf('linas'))
console.log(repeatIf('repeat'))
console.log(repeatIf('onepiece'))
console.log(repeatIf('one'))
console.log(repeatIf('on'))