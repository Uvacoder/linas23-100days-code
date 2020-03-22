/* 
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer
*/

function SED(num){
    
    //returns string data type
    /* return num.toString().split("").map(el=>{
        return Math.pow(el,2);
    }).join(""); */

    //returns number
    return Number(num.toString().split("").map(el=>{
        return Math.pow(el,2);
      }).join(""));


}

console.log(SED(9119));