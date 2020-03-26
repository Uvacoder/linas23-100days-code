function searchAndReplace(str,before,after){

    var index = str.indexOf(before);

    //  check if the first letter is capital
    if(str[index].charAt(0) === str[index].charAt(0).toUpperCase()){
        //  make all letters capital
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }

    str = str.replace(before,after)

    return str;

}


console.log(searchAndReplace('A quick brown fox Jumped over the lazy dog','Jumped','licked'))