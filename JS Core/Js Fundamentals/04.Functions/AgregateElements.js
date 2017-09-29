function aggregateElements(elements){

    function aggregate(arr, initVal, func){
        for(let e of arr){
            initVal = func(initVal, e)
        }
        return initVal;
    }

    console.log(aggregate(elements, 0, (a, b) => a + b));
    console.log(aggregate(elements, 0, (a, b) => a + 1 / b));
    console.log(aggregate(elements, '', (a, b) => a + b));
}
