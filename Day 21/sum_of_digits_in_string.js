/* Write a JavaScript program to compute the sum of all digits that occur in a given string.
 */

const sum_digits_from_string = str =>{
    str = str.split('');
    let sum = 0;

    str.forEach(el=>{
        if(/[0-9]/.test(el)){
            sum+=parseInt(el);
        }
    })

    return sum;


}

console.log(sum_digits_from_string("abcd12efg9"))
console.log(sum_digits_from_string("w3resource"))