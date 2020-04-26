/* 
Check whether there is at least one element which occurs in two given sorted arrays of integers
*/


const check_common_element = (a,b)=>{
   /*  a.forEach(el=>{
        if(b.includes(el)){
            console.log('i am here')
            return true;
        }
    }) */

    for(let i = 0 ; i<a.length ; i++){
        if(b.includes(a[i])){
            return true;
        }
    }

    return false;
}

console.log(check_common_element([1,2,3], [3,4,5]));   
console.log(check_common_element([1,2,3], [5,6,7])); 