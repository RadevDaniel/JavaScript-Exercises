function key(arr){
    let kNumber = arr[0];
    arr.shift();
    let firstSum = arr.slice(0, kNumber);
    let secondSum = arr.slice(-kNumber);
    console.log(firstSum.join(' '))
    console.log(secondSum.join(' '));
}
key([3, 6, 7, 8, 9]);