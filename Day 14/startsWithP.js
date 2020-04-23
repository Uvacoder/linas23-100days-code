/* 
Write a JavaScript program to create a new string from a given string, 
removing the first and last characters of the string
if the first or last character are 'P'. 
Return the original string if the condition is not satisfied.
*/


const nop = (str) =>{

    str = str.toLowerCase();
    const isP = str.charAt(0) == 'p'  && str.charAt(str.length-1)  == 'p';
    
    if(isP){
        str= str.split("")
        str.shift();
        str.pop();
        return str.join("")
    }

    return str;

    /* 
    let start_pos = 0;
  let end_pos = str.length;

  if (str.length > 0 && str.charAt(0) == 'P') 
    { 
      start_pos = 1; 
    }

  if (str.length > 1 && str.charAt(str.length - 1) == 'P') 
  {
    end_pos--;
  }

  return str.substring(start_pos, end_pos);
    */
}



console.log(nop("PythonP"));
console.log(nop("Python"));
console.log(nop("JavaScript"));