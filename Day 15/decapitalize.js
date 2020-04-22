/* 
Write a JavaScript program to dcapitalize the first letter of a string.
*/

const decapitalize = ([first,...rest])=>{
    console.log(first.toLowerCase() + rest.join(""))
}

decapitalize('Linas')
decapitalize('W3resource')