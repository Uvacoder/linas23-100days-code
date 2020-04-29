/* 
Write a JavaScript program to find all distinct prime factors of a given integer
 */

const prime_factors = num =>{
    let result = [];

    function isPrime(num){
        for(let i = 2; i<=Math.sqrt(num) ; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }

    for(let i = 2; i<=num; i++ ){
        if(isPrime(i) && num %i == 0){
            if(result.indexOf(i) == -1){
                result.push(i);
                // num /= i;
            }else{
                // num /= i;
            }
        }
    }


    
    return result;


}



console.log(prime_factors(100));
console.log(prime_factors(101));
console.log(prime_factors(103));
console.log(prime_factors(104));
console.log(prime_factors(105));