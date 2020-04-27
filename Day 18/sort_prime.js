/* 
Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
*/


const sort_prime = (num) =>{
    
    let prime_numbers = [];

    for(let i = 0 ; i<= num ; i++){
        prime_numbers.push(true);
    }

    prime_numbers[0] = false;
    prime_numbers[1] = false;

    for(let i = 2; i< Math.sqrt(num) ; i++){
        for(j = 2 ; i*j <= num ; j++){
            prime_numbers[i*j] = false;
        }
    }

    return prime_numbers.map((el,index)=>{
        return el ? index: null;
    }).filter(el=>el!= null)


}



console.log(sort_prime(5))
console.log(sort_prime(11))
console.log(sort_prime(19))
console.log(sort_prime(33))