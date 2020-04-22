/* 
Write a JavaScript program to create a new string from a given string 
with the first character of the given 
string added at the front and back.
*/

const firstAndLast = (str)=>{
    return str[0] + str + str[0]
}


console.log(firstAndLast('linas'))
console.log(firstAndLast('Lards'))