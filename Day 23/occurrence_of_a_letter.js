/* Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments: 'w3resource.com', 'o'
Expected output: 2
 */


 const char_count = (str,letter) =>{
     str = str.split("");
     return str.filter(el=> el == letter).length;
 }


console.log(char_count('w3resourcooe.com', 'o'));
