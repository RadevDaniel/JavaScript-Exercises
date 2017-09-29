function modify (number){
    let numberAsStr = number.toString();
    let sum = checkNum(numberAsStr);

    while(sum / numberAsStr.length <= 5){
        numberAsStr += '9';
        sum = checkNum(numberAsStr);
    }

    console.log(numberAsStr);

    function checkNum(numberAsStr){
        let sum = 0;
        for (let digit of numberAsStr){
            sum += Number(digit);
        }

        return sum;
    }

}
modify(5835);
