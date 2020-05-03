/* Write a JavaScript program to check whether a number is even or not.
 */


 const even_or_not = (num)=>{

    if (num < 0) 
  {
    num = Math.abs(num);
  }
  if (num===0) 
  {
    return true;
  }
  if (num===1) 
  {
    return false;
  }
  else 
  {
    num = num - 2;
    return even_or_not(num);
  }

 }


 console.log(even_or_not(3));
 console.log(even_or_not(23));