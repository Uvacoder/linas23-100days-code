/* 
Write a JavaScript exercise to get the extension of a filename.
*/



function getExtension(str){
    return str.split(".").pop();
}

console.log(getExtension('hello.js'))
console.log(getExtension('hello.jsx'))
console.log(getExtension('hello.html'))
console.log(getExtension('hello.php'))