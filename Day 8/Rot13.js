/* 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

function rot13(str){
    str = [...str];
    return str.map(letter =>{
        const code = letter.charCodeAt(0);
        if((code >=65 && code <=90) || (code >=97 && code <=122)){
            if(isUpper(letter)){
                return String.fromCharCode(((code - 65) + 13) % 26 + 65);
            }
            if(isLower(letter)){
                return String.fromCharCode(((code - 97) + 13) % 26 + 97);
            }
        }
        return letter;
    }).join('');
}

/* console.log(isUpper('B'));
console.log(isLower(' ')); */

function isUpper(el){
    return el.charCodeAt(0) == el.toUpperCase().charCodeAt(0);
}
function isLower(el){
    return el.charCodeAt(0) == el.toLowerCase().charCodeAt(0);
}

console.log(rot13('i Love you'));

/* 
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

function rot13(message){
  return message.split('').map(l => {
    let charCode = l.charCodeAt(0);
    if(charCode >= 97 && charCode <= 122){
      charCode = (charCode - 97 + 13) % 26 + 97;
    }
    else if(charCode >= 65 && charCode <= 90){
      charCode = (charCode - 65 + 13) % 26 + 65;
    }
    return String.fromCharCode(charCode);
  }).join('');
}

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";

function rot13(message){
  return message.split('').map(function(char) {
    var i = alphabet.indexOf(char);
    if (i < 0) {
      // not in alphabet, return char
      return char;
    }
    
    return cipher[i];
  }).join('');
}

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
*/