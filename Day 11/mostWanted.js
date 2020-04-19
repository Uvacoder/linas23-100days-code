/* 
You are given a text, which contains different english letters and punctuation symbols. You should find the most frequent letter in the text. The letter returned must be in lower case.
While checking for the most wanted letter, casing does not matter, so for the purpose of your search, "A" == "a". Make sure you do not count punctuation symbols, digits and whitespaces, only letters.

If you have two or more letters with the same frequency, then return the letter which comes first in the latin alphabet. For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".

Input: A text for analysis as a string.

Output: The most frequent letter in lower case as a string.

Example:

mostWanted("Hello World!") == "l"
mostWanted("How do you do?") == "o"
mostWanted("One") == "e"
mostWanted("Oops!") == "o"
mostWanted("AAaooo!!!!") == "a"
mostWanted("abe") == "a"
1
2
3
4
5
6
How it is used: For most decryption tasks you need to know the frequency of occurrence for various letters in a section of text. For example: we can easily crack a simple addition or substitution cipher if we know the frequency in which letters appear. This is interesting stuff for language experts!

Precondition:
A text contains only ASCII symbols.
0 < len(text) ≤ 105
*/

function mostWanted(str){
    const list = {};
    var wanted;
    str.toLowerCase().split("").forEach(el=>{
        if(!list[el]){
            list[el] = 0
        }
        list[el]++;
    })

    const arr = Object.entries(list)
    let highestRepeat = arr[0];
    arr.forEach(el=>{
        if(el[1] > highestRepeat[1]){
            highestRepeat = el;
        }
    })

    if(highestRepeat[1]==1){
        let latina = str[0].toLowerCase().charCodeAt(0);
        str.toLowerCase().split("").forEach(letter=>{
            if(letter.charCodeAt(0) < latina){
                latina = letter.charCodeAt(0);
            }
        })

        return String.fromCharCode(latina);
    }

    return highestRepeat[0];

}

console.log(mostWanted("HelLo World!"))
console.log(mostWanted("One"))
console.log(mostWanted("abe"))
console.log(mostWanted("AAaooo!!!!"))    // should remove exclamations first