function neighburs(matrix){
    let counter = 0;
    let lastline = matrix.length - 1;
    for(let i = 0; i < matrix.length - 1; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === matrix[i][j+1]){
                counter++;
            }
            if(matrix[i][j] === matrix[i+1][j]){
                counter++;
            }
            if (i == matrix.length - 2 && matrix[lastline][j] === matrix[lastline][j+1]){
                counter++;
            }
        }
    }
    console.log(counter);
}
neighburs([['2', '2', '5', '7', '4'],
 ['4', '0', '5', '3', '4'],
 ['2', '5', '5', '4', '2']]
);