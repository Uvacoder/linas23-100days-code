/* 
 Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
*/

const isPorN = (a,b)=>{
    return a < 0 ? b > 0 : b < 0;
 }



console.log(isPorN(1,-2))
console.log(isPorN(1,1))
console.log(isPorN(2,-3))
console.log(isPorN(-2,-3))

/* 
Write a JavaScript program to create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" then return the original string.
*/

const isPy = (str)=>{
    return str.toLowerCase().startsWith('py') ? str : `Py${str}`
}
console.log('**************')
console.log(isPy('java'))
console.log(isPy('Pytorch'))