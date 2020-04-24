/* 
Write a JavaScript program to check whether two given integers are similar or 
if a given divisor divides both integers and it does not divide either.
*/

const checking_numbers = (a,b,d)=>{
    return a%d== 0 && b%d == 0 || a%d != 0 && b%d != 0
}


console.log(checking_numbers(10, 25, 5))
console.log(checking_numbers(10, 20, 5))
console.log(checking_numbers(10, 20, 4))