/* 
 Write a JavaScript program to replace every character in a given string with the character 
 following it in the alphabet.
*/

const replaceAll = (str)=>{
    return str.split("").map(el=>{
        const charCode = el.charCodeAt(0)
        
        if(charCode > 96 && charCode < 123 || charCode > 64 && charCode < 91 ){
            if(charCode == 122 ){
                return String.fromCharCode(97)
            }
            if(charCode == 90){
                return String.fromCharCode(65)
            }

            return String.fromCharCode(charCode+1);

        }

        return el;
    }).join("")
}


console.log(replaceAll('ab#cd'))
console.log(replaceAll('wx yz'))