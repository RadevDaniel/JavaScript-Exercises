function checker(number){
    if(number % 2 == 0){
        console.log('even');
    }
    else if(number % 2 != 0 && number == Math.round(number)){
        console.log('odd');
    }
    else{
        console.log('invalid');
    }
}