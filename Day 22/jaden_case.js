/* Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox ' */

const jadenCase = str =>{
    return str.split(" ").map(el=>{
        return el.charAt(0).toUpperCase() + el.slice(1);
    }).join(" ");
}


console.log(jadenCase('the quick brown fox'));