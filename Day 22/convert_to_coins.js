/* Write a JavaScript function to convert an amount to coins.

Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1 */


const amountTocoins = (amt,coins) =>{
    console.log(coins)
    if(amt === 0 ) return [];

    if(amt >= coins[0]){
        left = amt - coins[0];
        return [coins[0]].concat(amountTocoins(left,coins));
    }else{
        coins.shift();
        return amountTocoins(amt,coins);
    }

}



console.log(amountTocoins(46, [25, 10, 5, 2, 1]));