/* 
Write a JavaScript program to check whether a given string contains equal number of p's and t's.
*/
function equal_pt(str)
{ 
  /* var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num; */

  return returnRepeat(str,'p') == returnRepeat(str,'t');

         
}

function returnRepeat(str,char){
    var acc = 0;
    str.split("").forEach(el=>{
        if(el==char) acc++;
    })
    return acc;
}


console.log(equal_pt('piratti'))
console.log(equal_pt('preety'))
console.log(equal_pt('rappettwot'))