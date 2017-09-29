function points([x, y, minX, maxX, minY, maxY]){
    if(x >= minX && x <= maxX && y >= minY && y <= maxY ){
        console.log("inside")
    }
    else{
        console.log("outside");
    }
}