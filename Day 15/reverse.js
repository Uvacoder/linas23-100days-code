/* 
Write a JavaScript program to reverse a given string.
*/

const reverseString = (str)=>{
    var res = []

    for(let i = str.length -1 ; i>=0 ; i--){
        res.push(str[i])
    }

    return res.join("")

}

console.log(reverseString('hello  World'))
console.log(reverseString('Oggy'))