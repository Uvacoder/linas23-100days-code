/* Write a JavaScript program to get the integers in range (x, y).

Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8] */

const range = (a,b)=>{
   
    if (b - a === 2) 
  {
    return [a + 1];
  } 
  else 
  {
    var list = range(a, b - 1);
    list.push(b - 1);
    return list;
  }
}


console.log(range(2,9));
