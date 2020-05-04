/* Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

Sample numbers : -5, -2, -6, 0, -1
Output : 0 */


const largest = arr =>{
    let max = arr[0];
    for(let i = 1 ; i<arr.length ; i++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


console.log(largest([-5,-4,-3,0,23]));
console.log(largest([-5,-4,-3,0,-23]));
console.log(largest([-5,-4,-3,0,-2,-1]));
