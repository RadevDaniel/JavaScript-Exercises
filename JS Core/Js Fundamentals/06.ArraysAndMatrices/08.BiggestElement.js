function biggest(matrix){
    let matrixMax = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] > matrixMax){
                matrixMax = matrix[i][j];
            }
        }
    }
        console.log(matrixMax);
}
biggest([[20, 50, 10],
 [8, 33, 145]]
);