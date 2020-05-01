/* Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

const test_prime = num =>{
    if(num === 1 ) return false;

    if(num === 2 ) return true;

    for(let i = 2; i <= num / 2 ; i++){
        if(num % i === 0) {
            return false;
        }
    }

    return true;

}


console.log(test_prime(367));
console.log(test_prime(361));
