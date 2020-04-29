/* 
Write a JavaScript program to find the smallest prime number strictly greater than a given number.
*/

const next_Prime_num = num =>{
    for(let i = num+1 ; ;i++){
        let isPrime = true;

        for(let j = 2; j*j <=i; j++){
            if(i%j == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            return i;
        }

    }
}




console.log(next_Prime_num(3));
console.log(next_Prime_num(17));