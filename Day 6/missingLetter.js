function findMissingLetter(str){
    /*
    for(let i = 0 ; i< str.length ; i++){
        // get the char code of the letter

        var code = str.charCodeAt(i);

        // if code of current character is not equal to first character + no. of iteration ,
        // hence character has been escaped 

        if( code !== str.charCodeAt(0) + i ){
        // if current character has escaped one character find the previous character and return it
            return String.fromCharCode(code -1);
        }

    }
    return undefined;
    */

    var compare = str.charCodeAt(0),missing;

    str.split("").map((el,index)=>{
        if(str.charCodeAt(index) == compare){
            ++compare;
        }else{
            missing = String.fromCharCode(compare);
        }
    })
    return missing;
}



console.log(findMissingLetter('abce')); // d