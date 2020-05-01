/* Write a JavaScript function which says whether a number is perfect.

Note : According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */


const perfect_number = num =>{
    const divisors = [1];
    for(let i = 2 ; i<=num/2; i++){
        if(num % i == 0) {
            divisors.push(i);
        }
    }
    console.log(divisors)
    let sum = divisors.reduce((acc,el)=>acc+el,0);

    return num == sum;
}

console.log(perfect_number(28))
console.log(perfect_number(27))
console.log(perfect_number(6))