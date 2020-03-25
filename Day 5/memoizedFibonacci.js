function fibMemo(index,cache){
    //index : index of number in fibonacci sequence to retrieve
    //cache : an array used as memory

    //Memoization : 
        /* 
            - Check to see if number already exists in cache
            - If number is in cache, use that number
            - If number is not in cache, calculate it and put it in cache so
                it can be used multiplt times in future
        */

    cache = cache || [];

    if(cache[index]) return cache[index];
    else{
        if(index < 3) return 1;
        else{
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index -2 , cache)
        }
    }
    console.log(cache)
    return cache[index]

}


console.log(fibMemo(20,[]));
console.log(fibMemo(5));