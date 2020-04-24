// Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.

const twice3040 = (arr) => {
    return arr[0] == arr[1] ? arr[1]==30 || arr[0] == 40 : false;
}



console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));
console.log(twice3040([31,30]));