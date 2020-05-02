/* Write a JavaScript program to pass a 'JavaScript function' as parameter.
 */

 const addStudent = (num,cb)=>{
     return cb(num);
 }

 const callback= n =>{
     return `welcome ${n} students`
 }


console.log(addStudent(23, callback))
