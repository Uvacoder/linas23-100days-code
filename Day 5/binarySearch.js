function binarySearch(arr,key){

    arr = arr.sort((a,b)=>a-b);

    let mid = Math.floor(arr.length / 2);

    if(key == arr[mid]){
        return true;
    }else if(key > arr[mid] && arr.length > 1){

        return binarySearch(arr.splice(mid,arr.length),key);

    }else if(key < arr[mid] && arr.length > 1){

        return binarySearch(arr.splice(0,mid),key);

    }else 
        return false;


}


console.log(binarySearch([1,3,33,454,34,457,44,47,32],48));