function translatePigLatin(str){
    /* var pigLatin = '';

    var regex = /[aeiou]/gi;

    //check if first character is vowel

    if(str[0].match(regex)){
        pigLatin = str + way;
    }else{
        // search for the consonants before the first vowel
        let vowelIndex = str.indexOf(str.match(regex)[0]);

        //  take the string from the first vowel to the last char
        //  then add the consonants that were previously omitted and add the ending
        pigLatin = str.substr(vowelIndex) + str.substr(0,vowelIndex) + 'ay';
    }
    return pigLatin; */

    /* unction check(el){
        return ['a','e','i','o','u'].indexOf(str.charAt(el)) == -1 ? check(el + 1) : el;
    }
    return str.substr(check(0)).concat(check(0) === 0 ? 'w' : str.substr(0,check(0)) + 'ay')
    */

    // nice one;

    var strArr = [];
    var tempChar;

    // check if the char is consonant using regex
    function isConsonant(char){
        return !/[aeiou]/.test(char)
    }

    // return initial str + 'way' if it starts with vowel
    // if not- convert str to array

    if(!isConsonant(str.charAt(0))){
        return str + 'way';
    }
    else{
        strArr = str.split("");

        // push all the consonants to the end of the array
        while(isConsonant(strArr[0])){
            tempChar = strArr.shift();
            strArr.push(tempChar)
        }

        return strArr.join("")+'ay'
    }


/* 
    return 
        str
        .replace(/^([aeiouy])(.*)/,'$1$2way')
        .replace(/^(^[aeiouy]+)(.*)/,$2$1ay);
*/



}



console.log(translatePigLatin("onsonant"));
console.log(translatePigLatin("consonant"));