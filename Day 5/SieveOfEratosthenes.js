// return all prime numbers up to the num in an array

function sieveOdEratosthenes(n){
    
    var primeNumbers = [];

    for(var i = 0 ; i <= n ; i++){
        primeNumbers[i] = true;
    }

    primeNumbers[0]=false;
    primeNumbers[1]=false;

    for(let j = 2; j < Math.sqrt(n) ; j++){
        for(let k = 2 ; j * k <= n ; j++){
            primeNumbers[j*k] = false;
        }
    }
    
    console.log(primeNumbers)
    var result = [];
    for(var i = 0 ; i< primeNumbers.length ; i++){
        if(primeNumbers[i]) result.push(i);
    }
    return result;
}


console.log(sieveOdEratosthenes(33));