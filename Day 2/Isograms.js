/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str){
    var res = [];
    str = str.toLowerCase();
      str.split("").forEach(el=>{
          if(!res.includes(el)){
              res.push(el);
          }
      })
      if(res.length != str.length){
          return false;
      }
      return true
  }


console.log(isIsogram(''))
console.log(isIsogram('Dermatoglyphics'))

/* 
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram (str) {
  return !str || (str.length === new Set(str.toLowerCase()).size);
}
*/