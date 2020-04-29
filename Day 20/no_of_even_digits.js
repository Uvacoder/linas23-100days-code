
/* 
Write a JavaScript program to find the number of even digits in a given integer.
*/

const even_digits = num =>{
    return num.toString().split("").filter(el=> el%2 == 0).length;
}


console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(102));