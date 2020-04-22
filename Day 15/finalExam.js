/* 
 Write a JavaScript program to check the total marks of a student in various examinations. 
 The student will get A+ grade if the total marks are in the range 89..100 inclusive, 
 if the examination is "Final-exam." the student will get A+ grade and 
 total marks must be greater than or equal to 90. 
 Return true if the student get A+ grade or false otherwise.
*/

const finalResult = (mark , isFinal) => {
    return mark > 89 ? 
                    isFinal ? mark >= 90: mark >=89
                    :false;
}


console.log(finalResult(88,false))
console.log(finalResult(98,true))
console.log(finalResult(90,true))
console.log(finalResult(89,false))