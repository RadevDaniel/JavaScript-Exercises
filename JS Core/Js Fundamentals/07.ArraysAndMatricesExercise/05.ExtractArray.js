function extract(arr){
    let length = arr.length;
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let newArr = [];
    let counter = 0;
    for(let i = 0; i < length; i++){
        if(biggestNumber <= arr[i]){
            biggestNumber = arr[i];
            newArr[counter] = arr[i];
            counter++;
        }
        else{
            continue;
        }
        
    }console.log(newArr.join('\n'));
}
extract([1,
3,
8,
4,
10,
12,
3,
2,
24
])