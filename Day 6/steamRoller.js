function steamRoller(arr){

/*     var steamedArry = [];

    var flatten = function(arg){
        console.log(steamedArry)
        if(!Array.isArray(arg)){
            steamedArry.push(arg);
        }else{
            for(var a in arg){
                flatten(arg[a])
            }
        }
    }
    arr.forEach(flatten);
    return steamedArry; */

    /*
    let flat = [].concat(...arr)
    return flat.some(Array.isArray) ? steamRoller(flat) : flat;

    */

    var steamRolled = [];

    for(var i = 0 ; i< arr.length; i++){
        if(Array.isArray(arr[i])){
            var subArray = steamRoller(arr[i])
            steamRolled = steamRolled.concat(subArray);
        }else{
            steamRolled.push(arr[i]);
        }
    }

    return steamRolled;
}



console.log(steamRoller([1,[2],[3,[4]]]))