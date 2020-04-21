/* 
Write a JavaScript program where the program takes a random integer between 1 to 10, 
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched".
*/
let userGuess;
const userInput = require('readline').createInterface({
    input:process.stdin
})
userInput.question('Guess the number between 1 to 10',(num=>{
    console.log('thanks for your guess')
    console.log('----------------------')
    userGuess = num;
    const rand = Math.floor(Math.random()*10);
        console.log('Computer guessed', rand);
        if(userGuess == rand){
            console.log('************Good Work************')
        }else{
            console.log('------------Not matched-----------')
        }
    userInput.close();
}))
