function isPalindrome(str){
    str = str.toLowerCase().split("");
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    const lettersArr = []

    str.forEach(char=>{
        if(validCharacters.includes(char)) lettersArr.push(char)
    })



    return lettersArr.join("") == lettersArr.reverse().join("");
}

console.log(isPalindrome("Madam i'm adam"));
console.log(isPalindrome("Momom"));
console.log(isPalindrome("RAceCAr"));
console.log(isPalindrome("javascript"));