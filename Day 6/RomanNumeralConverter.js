console.log(convertToRoman(33));
console.log(convertToRoman(23));
console.log(convertToRoman(1111));
console.log(convertToRoman(2222));
console.log(convertToRoman(222));
console.log(convertToRoman(2228));
console.log(convertToRoman(1999));
console.log(convertToRoman(12));
console.log(convertToRoman(15));
console.log(convertToRoman(77));
// console.log(convertToRoman(996545));
console.log(convertToRoman(75548789));


/* function convertToRoman(num){
    const decimalValue = [1000, 900 ,500 ,400 ,100 ,90 ,50 ,40 ,10 ,9 ,5 ,4 ,1];
    const romanNumeral = ['M' ,'CM' ,'D' , 'CD' ,'C' ,'XC' ,'L' ,'XL' ,'X' ,'IX','V' ,'IV' ,'I'];

    var romanized = '';
    for(var i = 0; i<decimalValue.length ; i++){
        while(decimalValue[i] <= num ){
            romanized += romanNumeral[i];
            num -= decimalValue[i];
        }
    }
    return romanized;
} */

//intermediate
/*
function convertToRoman(num){
    const romans = ['I','V','X','L','C','D','M'];
    var ints = [], romanNumber = [], numeral = "";

    while(num){
        ints.push(num % 10);
        num = Math.floor(num/10);
    }
    console.log(ints);
    for(var i = 0 ; i < ints.length ; i++){
        units(ints[i]);
    }

    function units(){
        numeral = romans[i*2];
        switch(ints[i]){
            case 1: 
                romanNumber.push(numeral);
                break;
            case 2: 
                romanNumber.push(numeral.concat(numeral));
                break;
            case 3:
                romanNumber.push(numeral.concat(numeral).concat(numeral));
                break;
            case 4:
                romanNumber.push(numeral.concat(romans[(i*2)+1]));
                break;
            case 5:
                romanNumber.push(romans[(i*2)+1]);
                break;
            case 6:
                romanNumber.push(romans[(i*2)+1].concat(numeral));
                break;
            case 7:
                romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral));
                break;
            case 8:
                romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
                break;
            case 9:
                romanNumber.push(romans[i*2].concat(romans[(i*2)+ 2]));
                break;
        }
    }
    return romanNumber.reverse().join("").toString();
}*/

function convertToRoman(num){
    var romans = [
        //10^i 10^i*5
        ['I','V'], //10^0
        ['X','L'], //10^1
        ['C','D'], //10^2
        ['M'] //10^3
    ],
    digits = num.toString()
                .split('')
                .reverse()
                .map(function(item,index){
                    return parseInt(item);
                }),
    numeral = '';

    //loop through each digit,starting with the ones place

    for(var i = 0; i < digits.length ; i++){
        //make a roman numberal that ignores 5-multiples and shortening rules
        numeral = romans[i][0].repeat(digits[i]) + numeral ;
        //check for a roman numeral 5-multiple version
        if(romans[i][1]){
            numeral = numeral
            //change occurences of 5 * 10^i to the corresponfing 5-multiple roman numeral
                        .replace(romans[i][1] + romans[i][0].repeat(4),romans[i][0] + romans[i+1][0])
                        .replace(romans[i][0].repeat(4),romans[i][0] + romans[i][1]);
        }
    }

    return numeral;
}