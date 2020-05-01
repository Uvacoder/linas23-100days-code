// Write a JavaScript function which returns the n rows by n columns identity matrix.


const matrix = num =>{
    let identityMatrix =[];
    for(let i = 0 ; i<num; i++){
        for(let j = 0; j<num ; j++){
            if(i == j){
                identityMatrix.push(1);
            }
            else{
                identityMatrix.push(0);
            }
        }
        identityMatrix.push('\n');
    }
    return identityMatrix.join("").split("\n").slice(0,-1);
}



console.log(matrix(4));