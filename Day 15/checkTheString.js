/* 
Write a program to check whether a specified character 
exists within the 2nd to 4th position in a given string.
*/

const searchWithIn = (str,key)=>{
    /* return key.length == 3 ?  
                        str.substring(1,4).toLowerCase() == key ? 'wow, it is true' :`Sorry, the word ${key} doesn't exist in the string` 
                        : `i can't search the word with the length of ${key.length}. Thank you` */

    return key.length == 1 ?  
                        str.substring(1,4).indexOf(key) > 0 ? 'wow, it exists' :`Sorry, ${key} doesn't exist in the string` 
                        : `Give me something to search of one character`

    
}


console.log(searchWithIn('javascript','v'))
console.log(searchWithIn('javascript','av'))
console.log(searchWithIn('swift','f'))
console.log(searchWithIn('react','a'))