/* Write a JavaScript program to reverse the order of the bits in a given integer.

56 -> 111000 after reverse 7 -> 111
234 -> 11101010 after reverse 87 -> 1010111
 */


const mirror_bits = num =>{
    /* let numBinary = num.toString(2);
    let reverse ;

    numBinary = numBinary.split("");

    while(numBinary.length != 8){
        numBinary.unshift('0');
    }

    reverse = numBinary.reverse().join("");


    return parseInt(reverse,2); */

    return parseInt(num.toString(2).split("").reverse().join(""),2);

}

console.log(mirror_bits(14));
console.log(mirror_bits(56));
console.log(mirror_bits(234));