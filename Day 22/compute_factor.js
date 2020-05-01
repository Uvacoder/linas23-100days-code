/* Write a JavaScript function to compute the factors of a positive integer.
 */

 const compute_factors = num =>{
     let res = [];
     for(let i = 1; i<=num; i++){
        if(num % i == 0 ){
            res.push(i);
        }
     }
     return res.sort((a,b)=>a-b)
 }

 console.log(compute_factors(15))
 console.log(compute_factors(16))