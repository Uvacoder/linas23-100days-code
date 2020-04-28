/* 
Write a JavaScript program to check whether a given number is in a given range.
*/

const is_inrange = (a,b,c) =>{
    return b >= a && b <= c;
}

console.log(is_inrange(1,2,3));
console.log(is_inrange(1,2,-3));
console.log(is_inrange(1.1,1.2,1.3));