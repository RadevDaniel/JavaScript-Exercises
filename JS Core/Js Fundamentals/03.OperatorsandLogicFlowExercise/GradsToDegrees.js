function converter(grads){
    grads %= 400;
    grads = grads < 0 ?  grads + 400 : grads;
    let converted = grads * 0.9;
    console.log(converted);
}
