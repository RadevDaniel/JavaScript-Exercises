function sequence(n, k){
    let seq = [1];
    for(let current = 1; current < n; current++){
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum = start + current + end;
        //if(start >= 0){
        //    sum = start + current + seq[start];
        //}
        seq[current] = sum;
    }
    console.log(seq);
}
sequence(6, 3);