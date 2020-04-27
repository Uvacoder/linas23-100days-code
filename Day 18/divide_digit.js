// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.


const divide_digit = (a,b)=>{

    if(b==1) return a;

    while(a % b == 0){
        a = a / b;
    }

    return a;
} 

console.log(divide_digit(-12, 2))
console.log(divide_digit(13, 2))
console.log(divide_digit(13, 1))