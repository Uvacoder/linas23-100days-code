/* 
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

function longestPalindrome(str){
    if(!str.length){
        return 0;
    }

    for(let i = str.length ; i>0 ; i--){
        for(let j = 0 ; j<= str.length - i ; j++){
            var word = str.substr(j,i);
            console.log(word)
            if(word === word.split("").reverse().join("")) return i;
        }
    }

}

console.log(longestPalindrome('a'))
console.log(longestPalindrome('racecar'))
console.log(longestPalindrome('mom'))
console.log(longestPalindrome(""))
console.log(longestPalindrome('i lovesracecarsso much'))

/* 
longestPalindrome=function(s){
  //your code here
  let isPalindrome = str => str.split('').reverse().join('') === str;
  
  for(let i = s.length; i >= 0; i--) {
    for(let j = s.length - i; j >= 0; j--){
      if( isPalindrome( s.substr(j, i) ) ){
        return i;
      }
    }
  }
}
*/