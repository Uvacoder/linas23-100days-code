/* Write a JavaScript function that returns the longest palindrome in a given string.

Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring. */


const longest_palindrome = str =>{

    let max_length = 0,maxp='';

    for(let i = 0 ; i<str.length; i++){
        let subs = str.substr(i,str.length);
        let j = subs.length;

        for(;j>=0;j--){
            let sub_subs_str = subs.substr(0,j);
            if(sub_subs_str.length <= 1){
                continue;
            }else{
                if(isPalindrome(sub_subs_str)){
                    if(sub_subs_str.length>max_length){
                        max_length =sub_subs_str.length;
                        maxp= sub_subs_str;
                    }
                }
            }
        }

    }

    return maxp;

}

function isPalindrome(str){
    return str == str.split("").reverse().join("");
}


console.log(longest_palindrome("abracadabra"));
console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 
