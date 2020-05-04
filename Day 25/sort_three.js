/* Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. */
/* Sample numbers : 0, -1, 4
Output : 4, 0, -1 */


const sort_three = (a,b,c) =>{

    if(a>b && a>c) {
        if(b>c){
            return `${a},${b},${c}`;
        }else{
            return `${a},${c},${b}`
        }
    }else if(b>a && b>c){
        if(a>c){
            return `${b},${a},${c}`;
        }else{
            return `${b},${c},${a}`;
        }
    }else if(c>a&&c>b){
        if(a>b){
            return `${c},${a},${b}`;
        }else{
            return `${c},${b},${a}`;
        }
    }

}


console.log(sort_three(45,23,1));
console.log(sort_three(4,23,1));
console.log(sort_three(4,0,-1));
console.log(sort_three(4,-3,1));