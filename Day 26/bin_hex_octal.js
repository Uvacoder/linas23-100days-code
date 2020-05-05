/* Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

Test Data:
console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));
"1111000"
"78"
"170" */

const dec_to_bho = (str,to)=>{
    switch(to){
        case 'B':return parseInt(str,10).toString(2);
        case 'H':return parseInt(str,10).toString(16);
        case 'O':return parseInt(str,10).toString(8);
    }
}


console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));