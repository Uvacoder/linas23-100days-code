/* 
Write a JavaScript program to check whether a given string contains only Latin letters 
and no two uppercase and no two lowercase letters are in adjacent positions
*/

const test_string = str =>{
    const is_lower_case = symbol => symbol >= 'a' && symbol <= 'z'
    const is_upper_case = symbol => symbol >= 'A' && symbol <= 'Z'

    const is_first_char_lower = is_lower_case(str[0])
    const is_first_char_upper = is_upper_case(str[0])


    // first letter is invalid
    if(!(is_first_char_lower||is_first_char_upper)){
        return false;
    }

    for(let i=1; i<str.length ; i++){

        if(i%2){
            //check odd index
            if(is_lower_case(str[i]) == is_first_char_lower || is_upper_case(str[i]) == is_first_char_upper){
                return false;
            }
        }else{
            // check even index
            if (is_lower_case(str[i]) !== is_first_char_lower ||
                is_upper_case(str[i]) !== is_first_char_upper) {
                return false;
            }   
        }
    }

    return true;
}



console.log(test_string('xYr'));   
console.log(test_string('XXyx'));