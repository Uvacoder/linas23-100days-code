/* 
Write a JavaScript program to test whether a string end with "Script". 
The string length must be greater or equal to 6
*/

const endWithScript = (str)=>{
    return str.length < 6 ? 
                'the length of the string is not enough'
                : str.slice(str.length-6,str.length).toLowerCase() == 'script' ? true:false
}


console.log(endWithScript('javascript'))
console.log(endWithScript('apple'))
console.log(endWithScript('coffeescript'))