/* 
Write a JavaScript program to check whether a string starts with 'Java' and false otherwise. 
*/

const isJava = ([a,b,c,d,...rest])=>{
    return [a,b,c,d].join("").toLowerCase() == 'java'
}


console.log(isJava('javascript'))
console.log(isJava('JaVa'))
console.log(isJava('python'))