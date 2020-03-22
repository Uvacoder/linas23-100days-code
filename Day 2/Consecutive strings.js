/* 
You are given an array strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/

function longest_consec(arr,num){
    const n = arr.length;
    let res = '';
    var reqStr = [];
    
    if(n == 0 || num > n || num <1){
        return "";
    }
    var longestStr = arr[0].length;
    arr.forEach((el,index)=>{
        if(el.length >longestStr){
            longestStr = el.length;
            reqStr.push(el);
        }
    })

    const reqIndex = arr.indexOf(reqStr[0]);

    for(let i = reqIndex ; i<reqIndex + num ; i++){
        res += arr[i];
    }

    return res;
}




console.log(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2))
console.log(longest_consec([], 3));
console.log(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))
console.log(longest_consec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))



/* 
function longestConsec(strarr, k) {
    var n = strarr.length, 
        str = '';

    if (n = 0 || k > n || k <= 0) {
        return str;
    }

    for (var i = 0; i < strarr.length; i++) {
        var currentStr = strarr.slice(i, k + i).join('');
        if (currentStr.length > str.length) {
            str = currentStr;
        }
    }
    return str;
}
*/