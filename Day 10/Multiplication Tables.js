/* 
Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

Example:

multiplication_table(3,3)

1 2 3
2 4 6
3 6 9

-->[[1,2,3],[2,4,6],[3,6,9]]

Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.
 */

 function multiplication_table(mul,num){
     var res = [];
     for(let i = 1; i<=mul; i++){
         var product = [];
         for(let j = 1; j<=num ; j++){
             product.push(i*j);
         }
         res.push(product);
     }

    return res;
 }

 console.log(multiplication_table(2,2));
 console.log(multiplication_table(3,3));

 /* 
 function multiplicationTable(row,col) {
  return Array(row).fill().map((outerValue, outerIndex) => {
    return Array(col).fill().map((innerValue, innerIndex) => {
      return (outerIndex + 1) * (innerIndex + 1);
    });
  });
}
  */