function meanMedianMode(arr){

    return {
        'mean':getMean(arr),
        'median':getMedian(arr),
        'mode':getMode(arr)
    }


}
function getMean(arr){

    let sum = 0;
    for(let i = 0 ; i<arr.length ; i++){
        sum += arr[i]
    }

    return sum / arr.length;
    
}
function getMedian(arr){
    arr.sort((a,b)=> a-b);
    var median = 0;
    if(arr.length % 2){
        median = arr[Math.floor(arr.length / 2)];
    }else{
        var m1 = arr[arr.length / 2]
        var m2 = arr[(arr.length / 2) -1]
        median = (m1+m2)/2;
    }
    return median;
}
function getMode(arr){

    var hashTable = {}

    arr.forEach(el=>{
        if(!hashTable[el]){
            hashTable[el] = 0;
        }
        hashTable[el]++;
    })
    console.log(hashTable)
    var maxFrequency = 0; 
    var modes = [];
    for(var num in hashTable){
        if(hashTable[num] > maxFrequency){
            modes = [num]
            maxFrequency = hashTable[num];
        }else if(hashTable[num] == maxFrequency) modes.push(num);
    }
    if(modes.length === Object.keys(hashTable).length) modes = []
    return modes;
    
}

console.log(meanMedianMode([1,1,2,2,3,3,4,4,7,7]));