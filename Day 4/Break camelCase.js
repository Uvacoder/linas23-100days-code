/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"

 */

function solution(str){
    var res = '';
    str.split("").forEach(el=>{
        if(el.charCodeAt(0)>=65 && el.charCodeAt(0)<=91){
            res += " "+ el;
        }else{
            res += el;
        }
    })

    return res;
}

console.log(solution("camelCasing"));


/* 
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}
*/