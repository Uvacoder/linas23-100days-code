function sym(){
    /* var args = [];
    for(let i = 0 ; i< arguments.length ; i++){
        args.push(arguments[i])
    }

    function symDiff(arr1,arr2){
        var result = [];

        arr1.forEach(el=>{
            if(arr2.indexOf(el) < 0 && result.indexOf(el) <0){
                result.push(el)
            }
        });

        arr2.forEach(el=>{
            if(arr1.indexOf(el) < 0 && result.indexOf(el) < 0){
                result.push(el)
            }
        })

        console.log(result)
        return result;
    }

    return args.reduce((a,b)=>symDiff(a,b)); */

    var args = Array.prototype.slice.call(arguments);

    var getDiff = function(arr1,arr2){

        function filterFunction(arr1,arr2){
            return arr1.filter(el=>{
                return arr2.indexOf(el) === -1
            })
        }
        return filterFunction(arr1,arr2).concat(filterFunction(arr2,arr1));
    }

    var symArray = args.reduce(getDiff,[]);

    var unique = symArray.filter((el,index,array)=>{
        return index === array.indexOf(el);
    })

    // return unique;


    //  ES6

    const diff = (A,B)=> new Set([...A]).filter(el=> !B.has(el));

    const result = [...arguments].map(arr=> new Set(arr) )
                    .reduce((acc,set)=> new Set([...diff(acc,set),...diff(set,acc)]));

    return [...result];

}



console.log(sym([1,2,5],[2,3,5],[3,4,5],[4,5,9,67]))