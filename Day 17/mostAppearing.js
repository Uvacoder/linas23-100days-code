/* 
Write a JavaScript program to find the number which appears most in a given array of integers.
*/

const array_element_mode = (arr)=>{
    let hashTable = {};

    arr.forEach(el=>{
        if(!hashTable[el]) hashTable[el] = 0;
        hashTable[el]++;
    })

    let max = Math.max(...Object.values(hashTable));

    const mostRepeated = Object.entries(hashTable).filter(el=>{
        return el[1] == max;
    })

    return mostRepeated[0][0];
}



console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))