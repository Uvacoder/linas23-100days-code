/* 
Write a JavaScript program to check whether it is possible to rearrange characters
of a given string in such way that it will become equal to another given string.
*/


const rearrangement_characters = (str1,str2)=>{
    str1= str1.split("").sort();
    str2= str2.split("").sort();

    return str1.length == str2.length && checkCharacters(str1,str2);
}

function checkCharacters(a,b){
    let res = true;

    for(let i = 0 ; i<Math.max(a.length,b.length) ; i++){
        if(a[i] != b[i]) res= false;
    }

    return res;
}

console.log(rearrangement_characters("xyz", "zyx"))
console.log(rearrangement_characters("xyz", "zyp"))
console.log(rearrangement_characters("xyz", "zyxa"))