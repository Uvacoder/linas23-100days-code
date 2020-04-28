/* 
Write a JavaScript program to check whether a given matrix is an identity matrix.

Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere.
[[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
[[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false
*/

const is_identity_Matrix = arr =>{
    for(let i = 0 ; i< arr.length ; i++){
        for(let j = 0 ; j< arr.length ; j++){
            if(i != j && arr[i][j] !== 0 || i == j && arr[i][j] !== 1 ){
                return false;
            }
        }
    }

    return true;
}




console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]]))