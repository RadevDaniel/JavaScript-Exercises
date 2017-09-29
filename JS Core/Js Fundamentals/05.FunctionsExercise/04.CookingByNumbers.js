function cook(arr) {
    let [start, op1, op2, op3, op4, op5] =
        [Number(arr[0]), arr[1], arr[2], arr[3], arr[4], arr[5]];

    let chop = (num) => num / 2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => num + 1;
    let bake = (num) => num * 3;
    let fillet = (num) => num -= num * 0.2;

    for (let op of [arr[1], arr[2], arr[3], arr[4], arr[5]]) {
        switch (op) {
            case 'chop':
                console.log(arr[0] = chop(arr[0]));
                break;
            case 'dice':
                console.log(arr[0] = dice(arr[0]));
                break;
            case 'spice':
                console.log(arr[0] = spice(arr[0]));
                break;
            case 'bake':
                console.log(arr[0] = bake(arr[0]));
                break;
            case 'fillet':
                console.log(arr[0] = fillet(arr[0]));
        }
    }
}
cook(["9", "dice", "spice", "chop", "bake", "fillet"]);