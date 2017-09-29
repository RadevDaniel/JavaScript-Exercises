function area(a, b, c){

    let perimeter = (a + b + c)/2;
    let S = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));

    console.log(S);
}
