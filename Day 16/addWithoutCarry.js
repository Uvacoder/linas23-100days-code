/* 
Write a JavaScript to add two positive integers without carry.
*/

const add = (num1,num2)=>{

   /*  var result = 0,
        x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x*= 10;
    }
    return result; */


    num1 = num1.toString().split("")
    num2 = num2.toString().split("")

    const max = Math.max(num1.length,num2.length);
    var res = '';

    for(let i = 0 ; i < max ; i++ ){
        // console.log(num1[i])
        // console.log(num2[i])
        var sum = 0 ;
        sum = num1[i] + num2[i]

        if(sum >= 10){
            sum = sum % 10;
        }

        res +=sum;
        sum=0;

    }
    console.log(res)
    return parseInt(res)
}



console.log(add(911,234))
console.log(add(91,23))
console.log(add(91,4))