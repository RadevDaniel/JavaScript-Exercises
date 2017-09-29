function nextDay(year, mont, day){

    let date = new Date(year, mont-1,day )
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);

    console.log(nextDate.getFullYear() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getDate());
}

nextDay(2016, 9, 30);