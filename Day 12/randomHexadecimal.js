/* 
Write a JavaScript program to generate a random hexadecimal color code.
*/

const random_hex_color_code=()=>{
    const n =(Math.random()* 0xfabcde * 1000000 ).toString(16)
    return '#' + n.slice(0,6)
}


console.log(random_hex_color_code())