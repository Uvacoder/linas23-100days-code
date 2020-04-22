/* 
Write a JavaScript program to check whether 
the last digit of the three given positive integers is same. 
*/


const isLast3Same = (num)=>{
    num = num.toString().split("");
    const f = parseInt(num.pop());
    const s = parseInt(num.pop());
    const t = parseInt(num.pop());
    return f == s ? s==t:false; 
}


console.log(isLast3Same(123465))
console.log(isLast3Same(123666))
console.log(isLast3Same(12343777))
console.log(isLast3Same(12343797))


const isLastDigitSame = (a,b,c)=>{
    return a % 10 == b % 10 ? b % 10 == c % 10 : false
}

console.log(isLastDigitSame(123,233,553))
console.log(isLastDigitSame(126,238,550))
console.log(isLastDigitSame(1230,2330,5530))