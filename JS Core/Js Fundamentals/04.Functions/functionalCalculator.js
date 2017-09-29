function calculate(a, b, op){
    let divide = function(a,b){return a/b};
    let multiply = function(a,b){return a*b};
    let subtract = function(a,b){return a-b};
    let add = function(a,b){return a+b};
    switch (op){
        case '/': return divide(a,b);
        case '*': return multiply(a,b);
        case '-': return subtract(a,b);
        case '+': return add(a,b);
    }

}
