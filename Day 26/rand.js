/* Write a JavaScript function to generate a random integer.

Test Data :
console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());
15
5
1
0 */

const rand = (min,max) =>{
    if(min==null && max == null){
        return 0;
    }

    if(max == null){
        max = min;
        min = max;
    }

    return Math.floor(Math.random()*max + min);

}


console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());