function printNth(arr){
    let step = arr.pop(arr[arr.length - 1]);
console.log(step);
    for(let i = 0; i < arr.length; i+=Number(step)){
        console.log(arr[i])
    }
}
printNth([
    '5',
'20',
'31',
'4',
'20',
'2'
])