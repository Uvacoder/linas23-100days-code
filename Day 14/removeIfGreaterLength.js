/* 
Write a JavaScript program to concatenate two strings and return the result.
If the length of the strings are not same then remove the characters 
from the longer string.
*/

const conc = (str1,str2)=>{
    const diff = Math.min(str1.length,str2.length);
    if(diff){
        return str1.substr(str1.length-diff) + str2.substr(str2.length-diff);
    }
    return str1+str2;
}



console.log(conc('linas','rumpum'))
console.log(conc('jack','rose'))
console.log(conc('jack','lilies'))