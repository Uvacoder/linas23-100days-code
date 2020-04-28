/* 
Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

For a string "2*0", the output should be : ["210", "240", "270"]
*/


const is_divisible_by3 = (str) =>{
    let result = [];
    str = str.split("");

    let hashIndex = str.indexOf('#');

    for(let i = 0 ; i<10; i++){

        str[hashIndex] = i;

        let num = str.join("");
        
        if(num % 3 == 0 ){
            result.push(num);
        }
    }

    return result;
}

console.log(is_divisible_by3("2#0"))
console.log(is_divisible_by3("4#2"))