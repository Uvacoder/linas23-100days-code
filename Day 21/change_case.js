/* 
Write a JavaScript program to change the capitalization of all letters in a given string.
 */

function change_case(txt) {
    let str1 = "";
    for (let i = 0; i < txt.length; i++) {
        if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
        else str1 += txt[i].toUpperCase();
    }
    return str1;
}

console.log(change_case("w3resource"));
console.log(change_case("Germany"));