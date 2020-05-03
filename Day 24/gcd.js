/* Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

 */

 const gcd = (a,b) =>{
     console.log(a,b)
     if(!b){
         return a;
     }
     return gcd(b,a%b);
 }

 console.log(gcd(336,360));
 console.log(gcd(36,24));