/* 
Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.
*/

const find_third_number = (a,b,c)=>{
    return a == b ? c 
                    : a == c ? b:
                                b == c ? a : -1; 
}


console.log(find_third_number(1,2,2))
console.log(find_third_number(1,1,2))
console.log(find_third_number(1,2,3))