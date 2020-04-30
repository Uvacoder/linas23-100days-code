/* 
Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
*/

const swap_adjacent_digits = num =>{
    num = num.toString().split("");

    if(num.length % 2 != 0){
        return false;
    }

    for(let i = 0; i < num.length ; i+=2){
        let temp = num[i];
        num[i] = num[i+1];
        num[i+1] = temp;
    }

    return num.join("");

}

console.log(swap_adjacent_digits(1234));
console.log(swap_adjacent_digits(123456));
console.log(swap_adjacent_digits(12345));