
function spinalCase(str){
    /* // create a variable for the white space and underscores
    var regex = /\s+|_+/g;
    //replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g,'$1 $2')
    //replace space and underscore with -
    return str.replace(regex, '-').toLowerCase(); */
    
    /* 
    str = str.replace(/([a-z])([A-Z])/g,'$1 $2')
    return str.toLowerCase().split(/(?:_|)+/).join('-');
   */

   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();

}


console.log(spinalCase("this is Spinal Tap."))
console.log(spinalCase("it's such a fine line between stupid and clever."))