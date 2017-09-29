function isPrime(n){
    let condition = true;
    let max = Math.ceil(Math.sqrt(n));
    for(let div = 2; div <= max; div++){
        if(div == n){
            continue;
        }
        if(n % div == 0){
            condition = false;
            break;
        }

    }
    return condition && (n > 1);
}