function binaryAgent(str){
    var biString = str.split(" ");
    var uniString = [];

    biString.forEach(el=>{
        uniString.push(String.fromCharCode(parseInt(el,2)))
    })
    // return uniString.join("");


    return String.fromCharCode(...str.split(" ").map(el=>{
        return parseInt(el,2)
    }))
}

console.log(binaryAgent("01010011 10100101 01011010 01111010 11110010"))