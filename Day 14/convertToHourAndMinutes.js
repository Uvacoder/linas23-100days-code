/* 
Write a JavaScript program to convert a given number to hours and minutes.
*/

const convert = (seconds)=>{
    return `${seconds} seconds is ${(seconds / 60).toFixed(2)} minute and ${(seconds / 3600).toFixed(2)} hours.`
}


console.log(convert(600))
console.log(convert(60))
console.log(convert(6000))
console.log(convert(3600))
console.log(convert(7200))