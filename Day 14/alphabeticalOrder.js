/* 
Write a JavaScript program to convert the letters of a given string 
in alphabetical order.
*/

const alphaOrder = (str) =>{
    // return str.split("").sort().join("")
    return str.split("").sort((a,b)=> a > b ? 1 :-1).join("")
}


console.log(alphaOrder('helloworld'))
console.log(alphaOrder('bzaypras'))