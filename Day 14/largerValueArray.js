/* 
Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
*/

/* const all_max = (arr)=>{
    let largest = 0;

    arr.forEach(el=>{
        if(el > largest){
            largest = el
        }
    })

    arr.map(el=>{
        return `${largest}`;
    })

    return arr;
} */

console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));