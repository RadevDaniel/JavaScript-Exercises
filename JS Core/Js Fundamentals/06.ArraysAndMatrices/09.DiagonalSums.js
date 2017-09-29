function sums(matrix){
    let result = [0,0];
    
    for(let i = 0; i < matrix.length; i++){
        result[0] += matrix[i][i];
        result[1] += matrix[i][matrix.length - i - 1]
    } 
    console.log(result.join(' '));
    
}
sums([[20, 40],
 [10, 60]]
);