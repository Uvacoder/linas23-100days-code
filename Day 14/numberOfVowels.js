/* 
Write a JavaScript program to count the
 number of vowels in a given string.
*/

const vowels = (str)=>{
    const vowels = 'aeiou'.split("");
    var num = 0;

    str.split("").forEach(el=>{
        if(vowels.includes(el)) num++;
    })
    
    return num;
    // return str.replace(/[^aeiou]/g, "").length; 
}


console.log(vowels('abcde'))
console.log(vowels('linas'))
console.log(vowels('rumpum'))
console.log(vowels('luffy'))