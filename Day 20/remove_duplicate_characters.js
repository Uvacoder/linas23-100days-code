/* 
Write a JavaScript program to remove all characters from a given string that appear more than once.
*/

const remove_duplicate_cchars = str =>{
    let characters = str.split("");
    
    return characters.filter((el) => characters.indexOf(el) == characters.lastIndexOf(el)).join("");

    /* let results = [];
    let characters = str.split("");

    for(let i = 0 ; i<str.length ; i++){
        if(str.indexOf(characters[i]) == str.lastIndexOf(characters[i])){
            results.push(characters[i])
        }
    }

    return results.join(""); */

}


console.log(remove_duplicate_cchars("abcdabc"));
console.log(remove_duplicate_cchars("python"));
console.log(remove_duplicate_cchars("abcabc"));
console.log(remove_duplicate_cchars("1365451"));