/* 
Write a JavaScript program to check whether a given integer has an increasing digits sequence.
*/

const is_increasing_digits_Sequence = num =>{

    num = num.toString().split("");

    for(let i = 0 ; i<num.length -1  ; i++){
        if(parseInt(num[i])>=parseInt(num[i+1])){
            return false;
        }
    }

    return true;
}

console.log(is_increasing_digits_Sequence(123));
console.log(is_increasing_digits_Sequence(1223));
console.log(is_increasing_digits_Sequence(45677));