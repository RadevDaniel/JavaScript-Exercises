function evenPos(arr){
    let newArr = '';
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
        newArr += arr[i] + " ";
        }
    }
    console.log(newArr);
}
evenPos(["20", "30", "40"])