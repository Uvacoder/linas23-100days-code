/* 
Write a JavaScript program to create an array of prefix sums of the given array.

In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
y0 = x0
y1 = x0 + x1
y2 = x0 + x1+ x2
...
*/

const prefix_sums = arr =>{
    let prefix_sums=[];

    arr.forEach((el,index,array)=>{
        let sum = 0;
        for(let i = 0 ; i<= index ; i++){
            sum += array[i];
        }
        prefix_sums.push(sum);
    })

    return prefix_sums;


}


console.log(prefix_sums([1, 2, 3, 4, 5]));
console.log(prefix_sums([1, 2, -3, 4, 5]));