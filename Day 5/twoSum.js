// returns every pair of numbers from an array that adds up to the sum provided.

function twoSum(arr,sum){
    /* var res = [];

    for(var i = 0 ; i <= arr.length; i++){
        for (let j = 1 ; j < arr.length; j++){
            if(arr[i] + arr[j] == sum){
                res.push([arr[i],arr[j]])
            }
        }
    }

    return res; */

    var pairs = [];
    var hashTable = [];

    arr.forEach(el=>{
        let currentNumber = el;
        let counterPart = sum - currentNumber;

        if(hashTable.indexOf(counterPart) !== -1){
            pairs.push([currentNumber,counterPart]);
        }
        hashTable.push(el);
    })

    return pairs;
}

console.log(twoSum([1,6,4,5,3,3],7))