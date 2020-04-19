/* 
Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it
 using the following algorithm. Replace every letter in the string with the letter 
 following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every
  vowel in this new string (a, e, i, o, u) and finally return this modified string.

Input: "hello*3"
Output: Ifmmp*3
Input: "fun times!"
Output: gvO Ujnft!
*/

function LetterChanges(str) { 

    // code goes here  
    var alphabets= 'abcdefghijklmnopqrstuvwxyz'.split("");
    var vowels = 'aeiou'.split("");
    str = str.split("");
  
    str = str.map(el=>{
      var index = alphabets.indexOf(el);
      if(index >= 0){
        
        if(index == 26){
          return alphabets[0]
        }
        return alphabets[index+1];
      }else{
        return el;
      }
    })
  
    str = str.map(el=>{
        let isVowel = vowels.indexOf(el) >=0 ? true:false;
        if(isVowel){
          return el.toUpperCase();
        } 
        return el
    })
  
    return str.join(""); 
  
  }
     
  // keep this function call here 
  console.log(LetterChanges('i love you'));