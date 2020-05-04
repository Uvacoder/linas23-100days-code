/* Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * * 

*/

const pattern = ()=>{
    let chr;
    for(let i = 0 ; i<=5; i++){
        for(let j = 0; j < i ; j++ ){
            chr += ' *';
        }
        console.log(chr);
        chr='';
    }
    for(let i = 5; i>0; i--){
        for(let j = 1; j< i ; j++){
            chr += ' *';
        }
        console.log(chr)
        chr='';
    }
}


pattern();