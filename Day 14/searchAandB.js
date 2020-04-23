/* 
Write a JavaScript program to check whether the characters a and b 
are separated by exactly 3 places anywhere (at least once) 
in a given string.
*/

const searchAB = (str)=>{
    return (/a...b/).test(str) || (/b...a/).test(str);
    /* str = str.split("");

    const indexofAB = str.indexOf('a') || str.indexOf('b');

    if(str[indexofAB + 4] == 'b' || str[indexofAB + 4] == 'a' ){
        return true ;
    }else if(str.indexOf('a')||str.indexOf('b')){
        str=str.splice(indexofAB,1);
        str=str.join("");
        searchAB(str);
    }else{
        return false;
    } */
}

console.log(searchAB('liacdibsd'))
console.log(searchAB('adkfbsdfkj'))
console.log(searchAB('adkfsdfjlk'))
console.log(searchAB('adkfsdafjlbk'))