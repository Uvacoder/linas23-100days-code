/* 
Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.
*/

const digit_to_one = num =>{
    var i = 0;
    while(num>=10){
        var sum = 0;
        num.toString().split("").forEach(el=>{
            sum+=parseInt(el);
        })
        num = sum;
        i++;
    }
    return i;
}


console.log(digit_to_one(123))
console.log(digit_to_one(156))
console.log(digit_to_one(99999999999))