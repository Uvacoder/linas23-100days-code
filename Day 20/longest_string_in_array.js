/* 
Write a JavaScript program to find the longest string from a given array.
*/

const longest_str_in_array = arr =>{
    var longest = arr[0];

    arr.forEach(el=>{
        if(el.length > longest.length){
            longest = el;
        }
    })

    return longest;

}



console.log(longest_str_in_array(["ab", "axyzad", "abcd"]));
console.log(longest_str_in_array(["ab", "ab", "ab"]));