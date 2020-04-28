/* 
Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.
*/


const is_monotonous = num =>{

    if (num.length === 1) {
        return true;
    }
    const num_direction = num[1] - num[0];
    console.log(num_direction)
    for (let i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;

}




console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]))
console.log(is_monotonous([-5, -2, -1]))