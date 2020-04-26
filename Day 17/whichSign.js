/* 
Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.

For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
 */

const check_arithmetic_Expression = (x,y,z) => {
    return x+y ==z || x-y ==z || x*y == z || x / y == z;
}


console.log(check_arithmetic_Expression(10, 25, 35))
console.log(check_arithmetic_Expression(10, 25, 250))
console.log(check_arithmetic_Expression(30, 25, 5))
console.log(check_arithmetic_Expression(100, 25, 4.0))
console.log(check_arithmetic_Expression(100, 25, 25))