/* 
Write a JavaScript program to check whether a string "Script" 
presents at 5th (index 4) position in a given string, 
if "Script" presents in the string return the string without "Script" 
otherwise return the original one. 
*/

const isScript = (str)=>{
    const tof = str.substring(4,10).toLowerCase() == 'script';
    return tof ? str.substring(0,4)+str.substring(10,str.length) : str
}


console.log(isScript('javascriptually'))
console.log(isScript('vuescript'))
console.log(isScript('typescripts'))
console.log(isScript('python'))
console.log(isScript('pyt'))