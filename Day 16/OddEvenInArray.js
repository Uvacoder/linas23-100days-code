/* 
Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on.
 Now compute the sum of two parts and store into an array of size two.
*/

const alternate_Sums = (arr)=>{
    var oddSum = 0;
    var evenSum =0;

    arr.forEach((el,index)=>{
        if(index % 2 == 0) {
            evenSum += el;
        }else{
            oddSum += el;
        }
    })
    return [evenSum,oddSum]
}



console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))