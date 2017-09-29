function solve(arr){
    let newArr = [];
    for(let num of arr){
        if(num < 0){
            newArr.unshift(num)
        }
        else{
            newArr.push(num);
        }
    }
    console.log(newArr.join('\n'));
}
solve([5,6,-7,8]);