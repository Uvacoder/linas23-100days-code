/* Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
----------
---------- */

iterate(23);

function iterate(num){
    while(num >=0 ){
        if(num % 2 == 0) {
            console.log(`${num} is even.`);
        }else{
            console.log(`${num} is odd.`);
        }
        num--;
    }
}

