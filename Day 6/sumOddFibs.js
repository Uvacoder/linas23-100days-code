function fibsSum(num){
    var arrFib = [1];

    for(let i = 1; i< num;){
        arrFib.push(i);
        i = arrFib[arrFib.length-1] + arrFib[arrFib.length-2];
    }

    console.log(arrFib)
    var res = arrFib.reduce((prev,curr)=>{
        if(curr % 2 !== 0) return prev + curr;
        else return prev;
    })
    return res;
}

console.log(fibsSum(8))
console.log(fibsSum(4))