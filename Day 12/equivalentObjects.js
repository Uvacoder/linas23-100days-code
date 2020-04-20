/* 
Write a JavaScript program to compare two objects to determine 
if the first one contains equivalent property values to the second one
*/

function matches(target,source){
    const ArraysOfKeys = Object.keys(source);
    return ArraysOfKeys.every(key=>{
         return target[key] && source[key] == target[key]
    })
        
}



console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false