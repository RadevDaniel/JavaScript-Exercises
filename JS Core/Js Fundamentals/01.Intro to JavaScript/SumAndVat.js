function sumAndVat(numbers){
    let sum = 0;
    for(let num of numbers)
        sum += num;

    console.log(sum);
    console.log(sum * 0.20);
    console.log(sum * 1.20);
}

sumAndVat([1.20, 2.60, 3.50]);