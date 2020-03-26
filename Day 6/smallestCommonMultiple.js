function smallestCommon(arr){
    /* var res = null;
    let i = Math.min(arr[0],arr[1]);
    while(!res){
        if(i % arr[0] == 0 && i % arr[1] == 0){
            res = i;
        }
        i++;
    }
    return res; */



    var range = [];
    var min = Math.min(arr[0],arr[1]);
    var max = Math.max(arr[0],arr[1]);

    for(var i = max ; i>=min; i--){
        range.push(i);
    }
    
    var lcm = range[0];

    for(var i = 1; i < range.length ; i++){
        var GCD = gcd(lcm,range[i]);
        lcm = (lcm * range[i]) / GCD;
    }

    return lcm;


    /* 
        var min = Math.min.apply(null,arr);
        var max = Math.max.apply(null,arr);
        var grandLCM;

        for(var i = min ; i < max; i++){
            if(i === min ) {
                grandLCM = (i * (i+1) / gcd(i,i+1));
            }else{
                grandLCM = (grandLCM * (i+1)) / gcd(grandLCM, i+1);
            }
        }
        return grandLCM;
    */


    function gcd(x,y){
        // Using euclidean algorithm
        if(y==0) 
            return x;
        else 
            return gcd(y,x % y);
    }

}


console.log(smallestCommon([3,4]))
console.log(smallestCommon([5,6]))
console.log(smallestCommon([5,9]))
console.log(smallestCommon([1,6]))