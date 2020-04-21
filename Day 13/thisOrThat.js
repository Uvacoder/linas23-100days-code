/* 
Write a JavaScript program to get the difference between a given number and 13,
 if the number is greater than 13 return square of  the absolute difference. 
*/

const thisOrThat = (num) =>{
    return num <= 13 ? 13-num: Math.pow(num-13,2);
}

console.log(thisOrThat(15))
console.log(thisOrThat(20))
console.log(thisOrThat(10))


/* 
Write a JavaScript program to compute the sum of the two given integers.
 If the two values are same, then returns triple their sum. 
*/
const computeSum = (a,b)=>{
    return a==b ? (a+b)*3 : a+b
}

console.log(computeSum(3,5))
console.log(computeSum(5,5))
console.log(computeSum(8,3))


/* 
 Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const isFifty = (a,b)=>{
    return a == 50 || b == 50 || a+b >=50;
}

console.log(isFifty(51,2))
console.log(isFifty(48,1))
console.log(isFifty(1,50))