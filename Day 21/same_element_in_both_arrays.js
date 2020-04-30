/* 
Write a JavaScript program to find the number of elements which presents in both of the given arrays.
*/

const test_same_elements_both_arrays = (arr1,arr2) =>{
    let num = 0;
    arr1.forEach(el=>{
        if(arr2.indexOf(el) > -1){
            num++;
        }
    })
    return num;
}


console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,4]));
console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,5]));
console.log(test_same_elements_both_arrays([1,2,3,4], [11,22,33,44]));