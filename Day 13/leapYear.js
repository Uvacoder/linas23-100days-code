/* 
Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

const isLeapYear = (year) =>{
    return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
}


console.log(isLeapYear(2016))
console.log(isLeapYear(2000))
console.log(isLeapYear(2018))
console.log(isLeapYear(2019))
console.log(isLeapYear(2020))
console.log(isLeapYear(2021))