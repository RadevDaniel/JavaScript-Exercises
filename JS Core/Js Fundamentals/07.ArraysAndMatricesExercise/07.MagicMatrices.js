function isMagic(matrix){
    let length = matrix.length;
let sumOne = 0;
let sumTwo = 0;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < matrix[i].length; j++){
             sumOne += matrix[i][j];
             sumTwo += matrix[j][i];
        }      
        sumOne = 0;
        sumTwo = 0;   
        }
        if(sumOne == sumTwo){
            console.log("true")
            
           // return true;
        }
        else{
            console.log("false")
        }
}
isMagic(
[[4, 5, 6],
 [6, 5, 2],
 [5, 5, 2]]
)