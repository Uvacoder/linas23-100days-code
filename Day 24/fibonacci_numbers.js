/* Write a JavaScript program to get the first n Fibonacci numbers.

Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two. */

const fibo = num =>{
    if(num < 1){
        return [0,1];
    }
    else{
        let list = fibo(num-1);
        list.push(list[list.length -1] + list[list.length -2])
        console.log(list)
        return list; 
    }
}

console.log(fibo(4));
// console.log(fibo(23));