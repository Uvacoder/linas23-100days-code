/* 
Write a JavaScript program to check whether 
three given numbers are increasing in strict mode or in soft mode.
*/

const mode = (a,b,c)=>{
    return b>a && c>b ? 'strict mode' : c>b ? 'soft mode' : 'it is decreasing'
}


console.log(mode(1,5,12))
console.log(mode(1,5,7))
console.log(mode(1,-5,7))
console.log(mode(10,15,31))
console.log(mode(24, 22, -31))