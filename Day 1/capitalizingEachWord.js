var str = "How can mirrors be real if our eyes aren't real";

function JadenCase(str){
    return str.split(" ").map(word=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ")
}

console.log(JadenCase(str));