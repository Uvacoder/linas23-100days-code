/* 
Write a JavaScript function that generates all combinations of a string.
Example string: 'dog'
Expected Output: d,o,do,g,dg,og,dog
*/


/* const subStrings = str =>{
    let result = '';
    for(let i = 0 ; i < str.length ; i++){
        result += str[i];
        result+='\n';
    };

    for(let i = 0 ; i<str.length ; i++){
        for(let j = i + 1 ; j < i+1 ; j++){
            result += str[j];
        }
    }


    return result;
}
*/
function substrings(str1) {
    var array1 = [];
    for (var x = 0, y = 1; x < str1.length; x++, y++) {
        array1[x] = str1.substring(x, y);
    }
    var combi = [];
    var temp = "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent; i++) {
        temp = "";
        for (var j = 0; j < array1.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += array1[j];
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

console.log(subStrings('dog'));