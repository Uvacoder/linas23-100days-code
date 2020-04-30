
/* Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.
 */

 const sumn = num =>{
     let sum = 0;
     let i = 0; 

     while(sum <= num) {
         sum += i++;
        console.log('i is ', i);
        console.log('sum is',sum);
        }
     return i-2;
 }


console.log(sumn(11))
console.log(sumn(15))