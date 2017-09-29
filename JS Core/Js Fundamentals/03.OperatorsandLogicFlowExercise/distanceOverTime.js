function distanceOverTime([S1, S2, T]){
    let V1 = S1 / T;
    let V2 = S2 / T;
    let distanceBetween = Math.abs(V1 - V2);
    console.log(distanceBetween)
}
distanceOverTime([0, 60, 3600]);
