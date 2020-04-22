/* 
 Write a JavaScript program to check whether two given integer values are in the given range  (inclusive). 
 Return true if either of them are in the said range.
*/

const isInRange = (num,range)=>{
    return range[0] <= num &&  num<= range[1]
}


console.log(isInRange(77,[50,100]))
console.log(isInRange(7,[50,100]))
console.log(isInRange(10,[10,15]))
console.log(isInRange(5,[30,60]))