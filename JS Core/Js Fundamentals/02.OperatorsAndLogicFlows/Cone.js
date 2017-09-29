function coneArea(r, h) {
    let s = Math.sqrt((r * r) + (h * h));
    let v = (Math.PI * (r * r) * h) / 3;
    let baseSurface = Math.PI * (r * r);
    let LateralSurface = Math.PI * r * s;
    let total = Math.PI * r * (r + s);

    console.log(v);
    console.log(total);
}
