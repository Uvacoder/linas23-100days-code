/* Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

 */

 function gcd(a,b){
     
     while (a!=b){
        if(a>b){
            a= a-b;
        }else{
            b = b-a;
        }
     }

     console.log(`gcd is `,a);

 }


 gcd(24,36);