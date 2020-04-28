/* 
Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).
*/

const is_correct_Sentence = str =>{
    return str[0] == str[0].toUpperCase() && str[str.length-1] == '.';
}

console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));            
console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));