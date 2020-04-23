/* 
Write a JavaScript program to create a new string without the first and last character
of a given string.
*/

const nofandl = (str)=>{
    str = str.split("")
    str.shift()
    str.pop()
    return str.join("");
}



console.log(nofandl('linas'))
console.log(nofandl('luffy'))
console.log(nofandl('abcde'))