/* Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Sample Data and output:
Example string: 'Web Development Tutorial'
Expected Output: 'Development' */


const longest_string = str =>{
    let maxIndex = 0;
    let maxLength = -1;

    str.split(" ").forEach((el,index)=>{
        if(el.length > maxLength){
            maxLength = el.length;
            maxIndex = index;
        }
    })

    return str.split(" ")[maxIndex];

}


console.log(longest_string('Web Development Tutorial'));