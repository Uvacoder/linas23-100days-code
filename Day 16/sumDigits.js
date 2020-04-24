/* 
Write a JavaScript program to add two digits of a given positive integer of length two.
*/

const sum = (num)=>{
    return num.toString()
                .split("")
                .map(el=>parseInt(el))
                .reduce((acc,el)=>acc+el)
}


console.log(sum(123))
console.log(sum(34))
console.log(sum(99))
console.log(sum(12345))