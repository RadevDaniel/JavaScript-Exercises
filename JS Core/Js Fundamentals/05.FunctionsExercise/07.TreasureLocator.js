function locator(cordinates){

    for(let i = 0; i < cordinates.length; i+=2){
        let x = cordinates[i];
        let y = cordinates[i+1];

        if(tuvalu(x, y)){
            console.log("Tuvalu");
        }
        else if(tokelau(x, y)){
            console.log("Tokelau");
        }
        else if(samoa(x, y)){
            console.log("Samoa");
        }
        else if(tonga(x, y)){
            console.log("Tonga");
        }
        else if(cook(x, y)){
            console.log("Cook");
        }
        else{
            console.log("On the bottom of the ocean");
        }

    }
    function tuvalu(x, y){
        let x1 = 1;
        let y1 = 1;
        let x2 = 3;
        let y2 = 3;
        if(x >= x1 && x <= x2 && y >= y1 && y <= y2){
            return true;
        }
        else{
            return false;
        }
    }
    function tokelau(x, y){
        let x1 = 8;
        let y1 = 0;
        let x2 = 9;
        let y2 = 1;
        if(x >= x1 && x <= x2 && y >= y1 && y <= y2){
            return true;
        }
        else{
            return false;
        }
    }
    function samoa(x, y){
        let x1 = 5;
        let y1 = 3;
        let x2 = 7;
        let y2 = 6;
        if(x >= x1 && x <= x2 && y >= y1 && y <= y2){
            return true;
        }
        else{
            return false;
        }
    }
    function tonga(x, y){
        let x1 = 0;
        let y1 = 6;
        let x2 = 2;
        let y2 = 8;
        if(x >= x1 && x <= x2 && y >= y1 && y <= y2){
            return true;
        }
        else{
            return false;
        }
    }
    function cook(x, y){
        let x1 = 4;
        let y1 = 7;
        let x2 = 9;
        let y2 = 8;
        if(x >= x1 && x <= x2 && y >= y1 && y <= y2){
            return true;
        }
        else{
            return false;
        }
    }


}