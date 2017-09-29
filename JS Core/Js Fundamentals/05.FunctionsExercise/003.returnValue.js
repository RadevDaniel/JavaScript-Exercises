function value(d,v){
    let a = d+v;
    function check(a){
        if(a > 0){
            return true;
        }
        else{
            return false;
        }
    }
    if(check(a)){
        console.log(check(a));
    }
    else{
        console.log("fuck you");
    }



}
value(6, -7);
