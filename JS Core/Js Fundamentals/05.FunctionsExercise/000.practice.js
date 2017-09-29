function triangleOfStars(number){

    function printStars(count){
        return "*".repeat(count);
    }

    for (let i = 1; i <= number; i++) {
        console.log(printStars(i))
    }
    for (let i = number - 1; i >= 1; i--) {
        console.log(printStars(i))
    }
}
triangleOfStars(50);