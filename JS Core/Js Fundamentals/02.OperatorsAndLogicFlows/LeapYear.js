function leap(year){
    let leapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

    if(leapYear == true){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}
