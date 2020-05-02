/* Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
 */


 const exp = (base,exp) =>{
     let ans = 1; 
     for(let i = 1 ; i<=exp ; i++){
         ans = i * ans;
     }

     return ans;
 }


console.log(exp(2, 4));
