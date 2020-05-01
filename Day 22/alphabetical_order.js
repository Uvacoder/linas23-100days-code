/* Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'

Note: Assume punctuation and numbers symbols are not included in the passed string.. */



const alphabet_order = str =>{
   return str.toString("").split("").sort().join("");
}

console.log(alphabet_order("webmaster"));