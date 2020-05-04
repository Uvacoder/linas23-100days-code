/* Write a JavaScript conditional statement to find the sign of produc
/* Sample numbers : 3, -7, 2
Output : The sign is - */


const sign_products = (a,b,c) =>{
    let product = a*b*c;
    console.log(product)
    if((product === -0 || product < 0) && product !== 0) return '-';

    return '+'
}

console.log(sign_products(0,-1,5));
console.log(sign_products(0,1,5));

