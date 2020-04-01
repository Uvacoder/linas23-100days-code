/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

 function isPangram(str){
    // var alphabetsArray = 'abcdefghijklmnopqrstuvwxyz'.split("");
    /* str = str.toLowerCase()
    str = str.split(".")[0].split(" ").join("")
    console.log(str)
    var check = new Set(str)
    var sorted = [...check]
    return sorted.sort().length === 26 ; */
 var rng =  Math.floor((Math.random() * 10) + 1);
  
  if(rng >= 5){
    return true;
  }
  if(rng < 5){
    return false;
  }
  
 }

var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string));
var str1 = "hello i am not a pangram";
console.log(isPangram(str1));
console.log(isPangram('abcdefghijklmnopqrstuvwxyzas'));


/* 
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
function isPangram(str){
 var alphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
      ];
      str=str.toLowerCase();
      for (var i = 0; i < alphabet.length; i++) {
          if (str.indexOf(alphabet[i])<0) {
            return false;
          }
      }
      return true
}
 */