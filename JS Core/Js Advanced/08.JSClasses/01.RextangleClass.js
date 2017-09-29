class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    };

    calcArea(){
        return this.width * this.height;
    };
}
let rectangle = new Rectangle(5, 8, 'white');
console.log(rectangle.calc());