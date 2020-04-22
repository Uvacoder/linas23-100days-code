/* 
Write a JavaScript program to find the largest of three given integers.
*/




const greatest = (a,b,c)=>{
    return a > b ? 
                a > c ? a: c
                : b > c ? b: c
}


console.log(greatest(1,2,3))
console.log(greatest(23,45,78))
console.log(greatest(12,23,300))