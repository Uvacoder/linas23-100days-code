function whatIsInAName(collection,source){

    // const srcKey = Object.keys(source) //array

    /* return collection.filter(el=>{
        if(!el.hasOwnProperty(srcKey[0]) || el[srcKey[0]] !== source[srcKey[0]]){
            return false;
        }
        return true;
    }) */

    /* return collection.filter(el=>{
        return srcKey.every(keys=>{
            return el.hasOwnProperty(keys) && el[keys] === source[keys];
        })
    }) */

    /* return collection.filter(obj=>{
        return srcKey.map(key=>{
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        }).reduce((a,b)=>{
            return a && b;
        })
    }) */

    var arr=[];
    var name,key,soVal,coVal;

    for(name in source){
        soVal = source[name]
    }


    for(let i = 0 ; i < collection.length ; i++){
        var obj = collection[i];

        for(key in obj){
            coVal = obj[key]

            if(coVal == soVal && name == key){
                arr.push(obj)
            }
        }
    }
    return arr;


}


console.log(whatIsInAName([{first:'linas',last:'luffy'},
                            {first:'romeo',last:'juilet'},
                            {first:'mercury',last:null}],{last:'luffy'}));