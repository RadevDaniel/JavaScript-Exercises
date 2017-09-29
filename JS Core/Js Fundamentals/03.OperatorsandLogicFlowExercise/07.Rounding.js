function round([num, precision]){
    let divider = Math.pow(10, precision);
    console.log(Math.round(num * divider) / divider);
}
