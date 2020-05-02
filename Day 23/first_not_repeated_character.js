/* Write a JavaScript function to find the first not repeated character.

Sample arguments : 'abacddbec'
Expected output : 'e'
 */

 const find_FirstNotRepeatedChar = str =>{
    str = str.split("");
    for(let i = 0 ; i<str.length ; i++){
        if(str.indexOf(str[i]) == str.lastIndexOf(str[i])){
            return str[i];
        }
    }
 }



console.log(find_FirstNotRepeatedChar('abacdzxdbeec'));
