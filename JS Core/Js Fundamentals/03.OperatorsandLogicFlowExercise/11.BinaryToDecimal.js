function decimal(str){
    let length = str.length;
    let counter = 0;
    let iterator = length-1;
    for(let value of str){
        if(value != 0){
            counter += Math.pow(2, iterator);
        }
        else{
            counter += 0;
        }
        iterator--;

    }
    console.log(counter);


}