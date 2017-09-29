function chessBoard(n){
    let head = '<div class="chessboard">';
    console.log(head);
    let color = 'white';
    for(let i = 1; i <= n; i++){
        console.log("  <div>");
        let condition = i % 2 == 0  ? color = "black" : color = "white";
        for(let a = 1; a <= n; a++){
            color = (color == 'white') ? 'black' : 'white';
            console.log(`     <span class="${color}"></span>`);
        }
        console.log("  </div>")
    }

    let foot = "</div>";
    console.log(foot);
}
