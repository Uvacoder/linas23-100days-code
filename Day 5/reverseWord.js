function reverseWords(str){

    var wordsArr = str.split(" ");

    var res = [];

    wordsArr.forEach(el=>{
        var reverseWord = '';
        for(let i = el.length-1 ; i>=0; i--){
            reverseWord += el[i]
        }
        return res.push(reverseWord)
    })

    return res.join(" ");

    /* return str.split(" ").map(el=> {
        return el.split("").reverse().join("")
    }).join(" ") */



}


console.log(reverseWords("this is a string of words"));
console.log(reverseWords("codeing javascript"));