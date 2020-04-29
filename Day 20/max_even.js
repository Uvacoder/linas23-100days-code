// Write a JavaScript program to get the largest even number from an array of integers.


const max_even = arr =>{
    let even = [];

    arr.forEach(el=>{
        if(el % 2 == 0 ){
            even.push(el);
        }
    })
    even = even.sort((a,b)=>a-b);

    return even[even.length-1];


}


console.log(max_even([20, 40, 200]));
console.log(max_even([20,200, 40, 350]));