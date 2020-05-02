/* Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

 */


 const array_binarySearch = (arr,key) =>{
    
    let mid,low,high; 
    arr = arr.sort((a,b) => a-b);
    console.log(arr)

    //  indexes
    low = 0;
    high = arr.length-1;
    mid = Math.floor((low + high) / 2);


    if(arr[mid] == key) {
        return mid;
    }

    else if(key < arr[mid]){
       let res =  array_binarySearch(arr.slice(0,mid),key);
       if(res === null){
           return null;
       }else{
           return mid + 1 + res;
       }
    }

    else if(key > arr[mid]){
        return array_binarySearch(arr.slice(mid),key);
    }

 }

var myArray = [1, 2, 3, 5, 7,6, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(array_binarySearch(myArray, 6));