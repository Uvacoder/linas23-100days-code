/* 
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
*/


function abbreviate(str){
    var dash = false;
    if(str.indexOf('-') >0 ){
        str = str.split("-");
        dash = true;
    }else{
        str = str.split(" ")
    }

    str = str.map(el=>{
        if(el.length <= 3){
            return el;
        }else{
            return `${el.charAt(0)}${el.length -2}${el.charAt(el.length-1)}`
        }
    })

    if(dash){
        return str.join('-')
    }

    return str.join(" ");
    // atleast 76 tests passed haha


}



console.log(abbreviate("elephants are very big animals."))
console.lo



/* 
var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
  return string.replace(find, replace);
}

function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}

function newWord(s){
  return s.slice(0,1) + s.slice(1,-1).length + s.slice(-1)
}

function abbreviate(string) {
  return string.split(' ')
                .map(function(word){ 
                        if(word.length > 3 && !word.includes('-') && !word.includes(',')) return newWord(word)
                        else if(word.length > 3 && word.includes('-')) return word.split('-').map(hWord => newWord(hWord)).join('-')
                        else if(word.length > 3 && word.includes(',')) return newWord(word.replace(',', '')) + ','
                        else return word})
                .join(' ')
}
*/