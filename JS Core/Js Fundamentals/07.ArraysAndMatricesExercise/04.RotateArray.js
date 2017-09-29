function rotate(arr){
    let rotation = arr.pop(arr[arr.length - 1]);
     for(let rotate = 0; rotate < rotation; rotate++){
        for(let i = 0; i<=arr.length; i++){
            arr.unshift(arr.pop());
        }
    }
    console.log(arr.join(' '))
}
rotate([1,
2,
3,
4,
2]
)