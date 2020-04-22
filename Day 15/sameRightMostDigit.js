/* 
Write a JavaScript program to check from three given numbers (non negative integers) 
that two or all of them have the same rightmost digit.
*/

const sameRightMostDigit = (a,b,c)=>{
    return a%10 == b%10 || a%10 == c%10 || c%10 == a%10
}



console.log(sameRightMostDigit(23,23,23))
console.log(sameRightMostDigit(233,238,235))
console.log(sameRightMostDigit(237,236,237))
console.log(sameRightMostDigit(231,1232,1231))