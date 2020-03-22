/* 
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return

[F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(m) being the smallest one such as F(m) * F(m+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
Note:
You can see examples for your language in "Sample Tests".
*/

function productFib(prod){
    
    var fiboArr = [0,1];
    console.log(fiboArr.length)
    while(fiboArr[fiboArr.length-1]*fiboArr[fiboArr.length-2] < prod){
        fiboArr.push(fiboArr[fiboArr.length-1]+fiboArr[fiboArr.length-2] )
    }

    const trueOrFalse = fiboArr[fiboArr.length-1]*fiboArr[fiboArr.length-2] == prod

    console.log(trueOrFalse)
    if(trueOrFalse){
        return [fiboArr[fiboArr.length-2],fiboArr[fiboArr.length-1],true]
    }else{
        return [fiboArr[fiboArr.length-2],fiboArr[fiboArr.length-1],false]
    }

}


console.log(productFib(4895))
console.log(productFib(84049690))
/* It worked hahahah */

/* 
clever one
function productFib(prod){
  var findProd = function(a, b){
    if (a * b == prod) return [a, b, true];
    if (a*b > prod) return [a, b, false];
    return findProd(b, a+b);
  }
  return findProd(0, 1);
}

function productFib(prod){
  let num1 = 0,
      num2 = 1;
  
  while(num1 * num2 < prod){
    num2 = num2 + num1
    num1 = num2 - num1
  }
  return [num1, num2, num1 * num2 === prod]
}

function productFib(prod){
  const fib = (a, b) => {
    if (a * b < prod) return fib(b, a + b)
    else return [a , b, a * b == prod]
  }
  return fib(0, 1, prod);
}
*/