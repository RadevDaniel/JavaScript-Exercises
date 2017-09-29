function colors(n){
    let firstRow = '<ul>';
    let secondRow = '<ul/>'
    console.log(firstRow);
    let color = 'blue';
    for( let i = 1; i <= n; i++){
        let condition = i % 2 == 0 ? color = "blue" : color = "green";
        console.log(`  <li><span style='color:${color}'>${i}</span></li>`)
    }
    console.log(secondRow);
}
