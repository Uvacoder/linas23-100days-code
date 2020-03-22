/* 
Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr(num,str){
    // return str.repeat(num); okay

    var res = '';

    for ( let i = 1; i<=num; i++){
        res += str + " ";
    }

    return res;

};


console.log(repeatStr(4,'hell'));