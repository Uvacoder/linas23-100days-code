/* Write a JavaScript program that accept two integers and display the larger.
 */



const larger_num = arr =>{
    if(arr.length <= 1) return arr[0] || null;
    if(arr.length == 2) return arr[0]>arr[1] ? arr[0] : arr[1];
    if(arr.length > 2 ) return arr.reduce((acc,curr)=> {
        return acc > curr ? acc:curr
    },0);
}



 console.log(larger_num([1,45,34,77,99]));
 console.log(larger_num([]));
 console.log(larger_num([1,5]));