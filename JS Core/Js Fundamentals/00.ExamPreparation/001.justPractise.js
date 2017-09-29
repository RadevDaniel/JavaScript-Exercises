function sumFirstLast(arr){
    let length = arr.length;
    let result = Number(arr[0]) + Number(arr[length - 1]);

    console.log(result);
}
sumFirstLast(["40", "50", "60", "5"]);