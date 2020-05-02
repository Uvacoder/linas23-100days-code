/* Write a JavaScript function that generates a string id (specified length) of random characters.

Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" */

const makeid = num =>{
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split("");
    let res = '';

    for(let i = 0 ; i<num ; i++){
        res+= characters[Math.floor(Math.random()*characters.length)];
    }

    return res;
}


console.log(makeid(8));
