/* 
Write a JavaScript to find the longest string from an given array 
of strings.
*/


const longest_string = (arr)=>{
    let longest = arr[0].length;

    arr.map(el=> {
       longest= Math.max(longest,el.length)
    })

    return arr.filter(el => el.length == longest)


}


console.log(longest_string(['a', 'aa', 'aaa','aaaaa','aaaa']))