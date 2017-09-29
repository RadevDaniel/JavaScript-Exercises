function addRemove(arr){
    let newArr = [];
    let result = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === "add"){
            result++;
            newArr.push(result);
        }
        if(arr[i] === "remove"){
            result++;
            newArr.pop();
        }
    } 
    if(newArr.length === 0){
            console.log("Empty")
    }
    else{
    console.log(newArr.join('\n'));
    }
}
addRemove(['remove', 'add', 'remove']);