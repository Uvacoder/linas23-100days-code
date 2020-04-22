/* 
Write a JavaScript program to capitalize the first letter of each word of a given string.
*/

const capitalizeEach = (str)=>{
    return str.split(" ").map(el=>{
        el =  el.split("")[0].toUpperCase() + el.slice(1)
        return el
    }).join(" ")
}

console.log(capitalizeEach('hello world what is up'))
console.log(capitalizeEach('Javascript is so much fun'))