function firstLast(arr){
    let secondResult = arr
    .filter((num, index) => index % 2 != 0)
    .map(x => x*=2)
    .reverse();
    console.log(secondResult);

}
firstLast([10, 15, 20, 25]);