function sumPrimes(num){
    /* var primes = [];
    var res = []
    primes[0] = false;
    primes[1] = false;

    for(let i = 2; i<num; i++){
        primes[i] = true;
    }

    for(let i = 2; i< Math.sqrt(num) ; i++){
        for(let j = 2 ; i * j <num; j++){
            primes[i*j] = false;
        }
    }

    primes.forEach((el,index)=>{
        if(el) {
            res.push(index)
        }
    })

    let sum = 0;

    res.forEach(el=>{
        sum += el;
    })

    return sum; */



    /* //  function to check if the number presented is prime
        function isPrime(num){
            for(var i=2 ; i < num ; i++){
                if(num % i === 0 && i != num){
                    return false;
                }
            }
            return true;
        }

    //  1 is not a prime, so return nothing, also stops the recursice calls
        if(num == 1 ) return 0;

    //    check if your number is not prime
        if(isPrime(num) === false) {
            return sumPrimes(num -1);
        }

    //  check if your number is prime
        if(isPrime(num) === true){
            return num + sumPrimes(num-1)
        } */


        let arr = Array.from({length:num + 1},(v,k)=>k).slice(2);
        console.log(arr)
        let onlyPrimes = arr.filter((n)=>{
            let m = n-1;
            while(m>1 && m>= Math.sqrt(n)){
                if((n%m)=== 0){
                    return false;
                }
                m--;
            }
            return true;
        })

        return onlyPrimes.reduce((a,b)=> a+b);

}


console.log(sumPrimes(977))
console.log(sumPrimes(21))
console.log(sumPrimes(10))
console.log(sumPrimes(2))