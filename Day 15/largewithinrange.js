/* 
Write a JavaScript program to find the larger number from the two given positive integers, 
the two numbers are in the range 40..60 inclusive.
*/

const largeWithInRange = (a,b)=>{
    return isInrange(a) && isInrange(b) ? 
                    a > b ? a : b
                    : `not within range`;
}

function isInrange(num){
    return num >= 40 && num <= 60
}


console.log(largeWithInRange(43,55));
console.log(largeWithInRange(43,33));
console.log(largeWithInRange(63,3));