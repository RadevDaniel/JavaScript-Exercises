function spices (firstDayCount){
    let dayAmount = Number(firstDayCount);
    let dayCounter = 0;
    let consumed = 0;

   while (dayAmount >= 100){
       consumed += dayAmount - 26;
       dayAmount -= 10;
       dayCounter++;
   }
    if(firstDayCount < 100){
        console.log(dayCounter);
        console.log(consumed);
    }
    else{
        console.log(dayCounter);
        console.log(consumed -= 26);
    }


}