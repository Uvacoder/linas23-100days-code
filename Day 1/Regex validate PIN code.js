/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes 
cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string,
return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/


function validatePin(pin){

    if( pin != parseInt(pin)){
        return false;
    }

    if(isNaN(pin) || pin < 0 ){
        return false;
    }
    // pin = parseInt(pin);
    if((pin.length == 4 || pin.length == 6)){
        return true;
    }else{
        return false;
    }

}

console.log(validatePin("675."))
/* 
    problems in 342.0, 0000, +121 ...
*/

/* 
solutions #copied
const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin)
const validatePIN = pin => [4, 6].indexOf(pin.length) !== -1 && Number.isInteger(+pin);
*/