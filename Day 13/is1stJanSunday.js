/*
Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
*/

const firstYear = 2014 ;
const lastYear = 2050 ;
const month = 1;
const date = 1;
const detail = [];

for(let i = firstYear ; i<= lastYear ; i++){

    const newYear = new Date(i,1,2);
    const day = newYear.getDay();

    if(day == 0) {
        detail.push(`The first day of year ${i} is sunday`)
    }else{
        detail.push(`The first day of year ${i} is not sunday`)
    }
}
console.log(detail.join('\n'))