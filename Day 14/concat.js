/* 
Write a JavaScript program to concatenate two strings 
except their first character. 
*/

const concatanate = (str1,str2)=>{
    return str1.slice(1,str1.length) + str2.slice(1,str2.length);
}


console.log(concatanate('linas','cool'))
console.log(concatanate('one','piece'))