/* 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/


function persistence(num){
    
    //god bless javascript

    if(num.toString().length == 1){
        return 0;
    }
    /* while(num.toString().length != 1){
        num.toString().split("").reduce((a,b,acc)=> {return a*b })
    } */
    return num;


}


console.log(persistence(39))
console.log(persistence(23))
console.log(persistence(2533))
console.log(persistence(4))

/* 
function persistence(num) {
   num = num.toString().split('')
   let result = 0
   while(num.length > 1){
     result ++
     num = num.reduce((pre,cur) => pre*cur,1).toString().split('')
   }
   return result
}
*/
/* 
function persistence(num) {
   var count = 0,temp;
   while(num>9){
     temp = num;
     num = 1;     
     do
     {
       num*= temp%10
       temp = Math.floor(temp/10)
     }
     while(temp)
     count++
   }
   
   return count;
}
*/