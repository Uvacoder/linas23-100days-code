/* Write a JavaScript function to get the number of occurrences of each letter in specified string.
 */

 const Char_Counts = str =>{
     let charArray = str.toLowerCase().split("").filter(el=> el !== ' ');

     let res = {};
     console.log(charArray);

     charArray.forEach(el=>{
         if(!res[el]){
            res[el] = 1;
         }else{
           res.el =  res[el]++; 
         }
     })

     return res;
 }

console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));
