/* 
Write a JavaScript program to simplify a given absolute path for a file in Unix-style.
*/

const simplify_path = str =>{

    let parts = str.split('/');
    let new_path = [];
    let length = 0;
    console.log(parts)
    for(let i = 0 ; i<parts.length; i++){
        let part = parts[i];
        if(part === '.' || part === '' || part === '..'){
            if(part === '..' && length > 0){
                length--;
            }
            continue;
        }else{
            new_path[length++] = part;
            console.log(`length ${length}`)
        }
    }

    if(length === 0){
        return '/';
    }

    let result = '';
    for(let i = 0 ; i<length ; i++){
        result += `/${new_path[i]}`;
    }

    return result;

}

console.log(simplify_path("/home/var/./www/../html//sql/"));