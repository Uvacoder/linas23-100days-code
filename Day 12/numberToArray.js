
/* 
Write a JavaScript program to converts a specified number to an array of digits.
*/
function digitize(num){
/* 
    return [...`${num}`].map(i=>parseInt(i))
*/

    return [...num.toString()].map(n=>parseInt(n))

}

console.log(digitize(123));
console.log(digitize(1230));