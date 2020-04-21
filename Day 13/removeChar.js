/* 
Write a JavaScript program to remove a character at 
the specified position of a given string and return the new string.
*/

const removeChar = (str,index)=>{
    return str.slice(0,index-1) + str.slice(index)
}

console.log(removeChar('helloworld',5))
console.log(removeChar('linas',1))


/* 
 Write a JavaScript program to create a new string from a given string 
 changing the position of first and last characters. The string length must be greater than or equal to 1.  
*/

const swapChar = (str)=>{
    if(str.length >= 1){
        return str.length == 1 ? str: str[str.length-1] + str.slice(1,str.length-1) + str[0]
    }
    return false;
}


console.log('****************')
console.log(swapChar('hello'))
console.log(swapChar('luffy'))
console.log(swapChar('nami'))
console.log(swapChar('R'))
console.log(swapChar('rumpum'))