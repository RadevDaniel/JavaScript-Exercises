function solve(arr){
    let targetSize = arr[0];
    let oprStr = "cut";

    for(let i = 1; i < arr.length; i++){
        let microns = arr[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(microns, 'Cut', cut);
        microns = executeOperation(microns, 'Lap', lap);
        microns = executeOperation(microns, 'Grind', grind);
        microns = executeOperation(microns, 'Etch', etch);

        if(microns + 1 == targetSize){
            microns = xRay(microns);
        }
        console.log(`Finished crystal ${microns} microns`);
    }

    function cut(crystal){
       crystal /= 4;
        return crystal;
    }
    function lap(crystal){
        crystal -= crystal * 0.2;
        return crystal;
    }
    function grind(crystal){
        crystal -= 20;
        return crystal;
    }
    function etch(crystal){
        crystal -= 2;
        return crystal;
    }
    function xRay(crystal){
        console.log("X-ray x1");
        crystal += 1;
        return crystal;
    }
    function transportWash(crystal){
        console.log("Transporting and washing");
        return Math.floor(crystal);
    }
    function executeOperation(microns, oprStr, op){
        let newSize = op(microns);
        let counter = 0;

        while(newSize >= targetSize ||
        Math.floor(targetSize - newSize) === 1){
            microns = newSize;
            newSize = op(microns);
            counter++;
        }
        if (counter > 0){
            console.log(`${oprStr} x${counter}`);
            microns = transportWash(microns);
        }

        return microns;
    }


}
solve([1375, 50000]);