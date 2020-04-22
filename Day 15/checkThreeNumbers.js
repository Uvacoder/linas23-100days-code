/* 
     Write a JavaScript program to check three given numbers, 
     if the three numbers are same return 30 otherwise return 20 
     and if two numbers are same return 40. 
*/

const checkThree = (a,b,c)=>{
    return a==b==c ? 30 : a==b || b==c || a== c ? 40 : 20
}


console.log(checkThree(1,2,3))
console.log(checkThree(1,2,2))
console.log(checkThree(1,1,1))