/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

 */
var str = "Dash BTC ProofOfStake Factom Waves DarkCoin";
// output 3 

function findShort(s){

    s= s.split(" ")
    let shortest = s[0].length;
    for(let i = 1; i<s.length; i++){
        if(s[i].length<shortest){
            console.log('i am here')
            shortest = s[i].length
        }
    }

    return shortest;

}

console.log(findShort(str));