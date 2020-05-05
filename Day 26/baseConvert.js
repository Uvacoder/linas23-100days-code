// Write a JavaScript function to convert a number from one base to another.


const base_convert = (num,from,to) =>{

    if((from && to ) < 2 || (from && to ) > 36){
        return 'base should be between 2 and 36. '
    }

    return parseInt(num,from).toString(to);

}



console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
console.log(base_convert(11,2,10));