
console.log(differenceBetnTwoArrays([1,2,3,4,5,111,333,555],[1,2,3,4,222,444,666]));
// => [ 111,333,555,222,444,666 ]
console.log(differenceBetnTwoArrays([1,2,9,5,4,8,6,2,654,61,64,32],[1,2,4,5,5,6,2,7,5,8,1,56,564,2,64,2,64]));

/*
function differenceBetnTwoArrays(arr1,arr2){
   
    var resultingArray = [];

    /* it doesn't work
     for(var i =0 ; i<arr1.length ; i++){
        for(var j = 0 ; j<arr2.length ;j++){
            arr1[i] != arr2[j] ? resultingArray[i]=arr1[i]: '';
        }
    } */

    /* for(var i =0 ; i < arr1.length ; i++){
        if(arr2.indexOf(arr1[i])===-1){
            resultingArray.push(arr1[i]);
        }
    }

    for(var i = 0; i< arr2.length ; i++){
        if(arr1.indexOf(arr2[i]) === -1){
            resultingArray.push(arr2[i]);
        }
    }
    //also can iterate the values by calling a function 
    */
   /* var newarray =[];
    function check(first,second){
        for(var i = 0 ; i < first.length ; i++){
            if(second.indexOf(first[i])===-1){
                newarray.push(first[i]);
            }
        }
    }
    check(arr1,arr2);
    check(arr2,arr1);
    return newarray; 
    
    return resultingArray;

}*/

//intermediate
/* function differenceBetnTwoArrays(arr1,arr2){   
    return arr1
    .concat(...arr2)
    .filter(el=> !arr1.includes(el) || !arr2.includes(el));
} */

//advanced
/* function differenceBetnTwoArrays(arr1,arr2){   
    return arr1.filter(el=> !arr2.includes(el))
        .concat(arr2.filter(el=> !arr1.includes(el)));
} */
function differenceBetnTwoArrays(arr1,arr2){   
    var newarray = [];

    //concatanate two arrays and sort the items in ascending order
    var orderedArray = arr1.concat(arr2).sort((a,b)=>a-b);

    // console.log(orderedArray);
    // return orderedArray;

    //loop through the ordered array and push the element to the empty array that 
    //doesn't have a twin in the concatanated array.

    for(var i = 0 ; i<orderedArray.length ; i++){
        if(orderedArray[i] !== orderedArray[i+1] && orderedArray[i] !== orderedArray[i-1])
            newarray.push(orderedArray[i]);
    }
    
    return newarray;
}