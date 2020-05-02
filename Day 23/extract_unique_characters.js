/* Write a JavaScript function to extract unique characters from a string.

Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg" */

const extract_unique = str =>{
    let res = '';

    for(let i = 0 ; i<str.length ; i++){
        if(res.indexOf(str[i]) == -1){
            res+=str[i]
        }
    }

    return res;

}

console.log(extract_unique('thequickbrownfoxjumpsoverthelazydog'))