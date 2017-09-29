function oddNums(arr){
    let reversed = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            //let doubled = doubled.unshift(arr);
            reversed.unshift(arr[i] *= 2);
        }
    }
    console.log(reversed.join(" "));
}
oddNums([3, 0, 10, 4, 7, 3]);