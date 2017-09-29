function evenElement (arr){
    let result = [];
    for (let i in arr) {
        let num = arr[i];
    }
    if (Number(num) % 2 == 0){
        result.push(arr[num]);
        console.log(result.join(' '))
   }
}
evenElement(["1", "0", "70"])