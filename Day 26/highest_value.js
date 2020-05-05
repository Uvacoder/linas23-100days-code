/* Write a JavaScript function to find the highest value in an array.

Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56
0 */

const max = arr =>{
    return arr.reduce(getMax,0);
}


function getMax(acc,item){
    return acc > item ? acc : item;
}


console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));