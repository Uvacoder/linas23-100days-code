function maxStockProfit(pricesArr){
    //takes in array of prices as parameter
    //returns the max possible profit of the day

    var maxProfit = -1;
    var buyPrice = 0; 
    var sellPrice = 0; 

    var changeBuyPrice = true;

    for(let i = 0 ; i < pricesArr.length ; i++){

        if(changeBuyPrice) buyPrice = pricesArr[i];
        sellPrice = pricesArr[i+1];

        if(sellPrice < pricesArr) changeBuyPrice = true;
        else{
            var tempProfit = sellPrice - buyPrice; 
            if(tempProfit > maxProfit ) maxProfit = tempProfit;
            changeBuyPrice = false;
        }
    }

    return maxProfit;

}




console.log(maxStockProfit([23,34,29,40,100,47,25]))


