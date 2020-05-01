/* Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

Sample Data and output:
Example string: 'The quick brown fox'
Expected Output: 5 */


const number_of_vowels = (str)=>{
    let num = 0 ; 
    const vowels = 'aeiou'.split("");

    str.split("").forEach(el=>{
        if(vowels.indexOf(el.toLowerCase()) > -1){
            num++;
        }
    })
    

    return num;


}


console.log(number_of_vowels('The quick brown fox'));