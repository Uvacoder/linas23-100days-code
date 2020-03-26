console.log('hello');

//sum all numbers in a range
//ex [1,5] => sum = 1+2+3+4+5 = 15;

console.log(sumall([5,1]));
console.log(sumall([20,20]));
console.log(sumall([20,25]));


/* function sumall(array){
    const firstRange = array[0];
    const lastRange = array[1];

    if(firstRange<lastRange){
        var sum = 0;
        for(var i = firstRange ; i<=lastRange ; i++){
            console.log(i);
            sum = sum + i;
        }
        return `sum is ${sum}`;
    }else if(firstRange>lastRange){
        var sum = 0;
        for(var i = firstRange ; i >= lastRange ; i--){
            console.log(i);
            sum = sum + i;
        }
        return `sum is ${sum}`;
    }else{
        sum = firstRange + lastRange;
        return `sum is ${sum}`;
    }
}
 */

 /* function sumall(array){
     const max = Math.max(array[0],array[1]);
     const min = Math.min(array[0],array[1]);

     var sum = 0 ;

     for(var i = min; i<=max; i++){
         console.log(i);
         sum +=i;
     }
     return `sum is ${sum}`;
 } */

 //intermediate 

 /* function sumall(array){
     const sortedarray = array.sort((a,b)=>a-b);
     const fnum = sortedarray[0];//1 ,20 
     const lnum = sortedarray[1];//5 ,25
    
     //using arithmetic progression summing formula
     return sum = (lnum - fnum +1) * (fnum + lnum) /2;
 } */

 //advanced

 /* function sumall(array){
     var sum = 0;
     for(var i = Math.min(...array); i<= Math.max(...array); i++){
         sum += i;
     }
     return `sum is ${sum}`;
 } */

 /* ------------- */

 function sumall(array){
    const max = Math.max(array[0],array[1]);
    const min = Math.min(array[0],array[1]);

    var numbersInsideRange = [];

    for(var i = min ; i <= max ; i++){
        numbersInsideRange.push(i);
    }

    console.log(numbersInsideRange);
    var sum = 0;
    numbersInsideRange.forEach(el=>{
         sum += el;
    })
    return `sum is ${sum}`;
 }