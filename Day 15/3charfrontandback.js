/* 
Write a JavaScript program to create a new string from a given string taking the last 3 characters 
and added at both the front and back. The string length must be 3 or more.
*/

const threeChars = (str)=>{
    
    return str.length >= 3 ? solvethis(str) : str  
}

const solvethis = (str) =>{
    let threeC = '';
    for(let i = 3 ; i>0 ; i-- ){
        threeC += str[str.length - i]
    }
    return threeC + str + threeC
}

console.log(threeChars('li'))
console.log(threeChars('marshall'))
console.log(threeChars('javascript'))
