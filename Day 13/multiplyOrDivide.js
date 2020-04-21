
/* 
 Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
*/

console.log('************************')
console.log('enter 1 for multiply')
console.log('enter 2 for divide')
console.log('************************')
const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
let choice,first,second;
readline.question('enter yout choice? (1/2)',(c)=>{
    choice = c;
    if(c>2||c<1){
        console.log('enter the valid number.')
        process.exit(0);
    }
    readline.question('enter first number => ',f=>{
        first = f;
        readline.question('enter second number => ',s=>{
            second = s;
            setTimeout(() => {
                if(choice==1){
                    console.log(`the result of multiplication of numbers ${first} and ${second} is ${ first * second}`)
                }else{
                    console.log(`the result of division of numbers ${first} and ${second} is ${ first / second}`)
                }
                readline.close();
            }, 1500);
        })
    })
})



