
/* 
Write a JavaScript program to filter out the specified values from a specified array.
Return the original array without the filtered values
*/

const pull = (arr,...args)=>{

    /* args.forEach(arg=>{
        arr.filter(el=> el==arg)
    }) */
    //checking if the arguments is array or not

    const arguments = Array.isArray(args[0])? args[0]:args;

    return arr.filter(el=> !arguments.includes(el))
}


let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c'));
let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra2, 'b'));

/* 
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return pulled;
};
*/