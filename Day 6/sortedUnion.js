function uniteUnique(...arrays){
    /* let res = [];
    for(let i = 0 ; i< arrays.length ; i++){
        let newArr = arrays[i];
        for(let j = 0 ; j<newArr.length ; j++){
            if(res.indexOf(newArr[j]) < 0){
                res.push(newArr[j])
            }
        }
    }
    return res; */

    /* var newArr = [];

    // converting the arguments object to an array
    var args = Array.prototype.slice.call(arguments);
    console.log(args)
    // use Array.reduce to flatten the array 
    newArr = args.reduce((arrA,arrB)=>{
        // filter the arrays to remove the duplicate elements
        return arrA.concat(arrB.filter(el=>{
            return arrA.indexOf(el) === -1;
        }));
    });

    return newArr; */

    /* var concatArrays = [];
    var i = 0;

    while(arguments[i]){
        concatArrays = concatArrays.concat(arguments[i]);
        i++;
    }
    console.log(concatArrays);

    var uniqueArray = concatArrays.filter((el,index)=>{
        return concatArrays.indexOf(el) == index;
    })
    console.log(uniqueArray)
    return uniqueArray; */


    /* const args = [].concat(...arguments);
    console.log(args)
    return [...new Set(args)] */

    /* var args = Array.from(arguments);
    console.log(args)
    var uniqueValues = [];

    for(var i = 0 ; i < args.length-1; i++ ){
        for(var j = 0 ; j < args.length ; j++){
            if(!uniqueValues.includes(args[i][j])){
                uniqueValues.push(args[i][j]);
            }
        }
    }
    return uniqueValues; */
    console.log(arrays)
    return arrays.reduce((a,c)=>{
        return a.concat(c.filter(el=>{
            return a.indexOf(el) == -1;
        }))
    })

}

console.log(uniteUnique([1,6,4,2],[6,3,2],[2,0]))