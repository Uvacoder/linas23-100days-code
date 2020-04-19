/* 
You are given a non-empty list of integers (X). For this task,
 you should return a list consisting of only the non-unique elements in this list.
  To do so you will need to remove all unique elements (elements which are contained in a given list only once). 
When solving this task, 
do not change the order of the list. Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].
*/

/* 
nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
*/
function nonUniqueElements(arr){

    let list={};
    arr.forEach(el=>{
        if(!list[el]){
            list[el]=0;
        }
        list[el]++;
    })
    const arra = Object.entries(list);
    var unique;
    arra.forEach(el=>{
        if(el[1] == 1){
            unique = el[0];
        }
    })
    const index = arr.indexOf(parseInt(unique));
    arr.splice(index,1)
    return arr;
}

console.log(nonUniqueElements([1, 2, 3, 1, 3]))
console.log(nonUniqueElements([5, 5, 5, 5, 5]))
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]))