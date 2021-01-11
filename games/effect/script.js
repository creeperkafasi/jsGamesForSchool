const imageElement = document.getElementById("efektResim");
let sat = 100,
    grayscale = 0,
    contrast = 100;

function setEffects(effect, val) {
    switch (effect) {
        case "saturation":
            sat = val;
            break;
        case "grayscale":
            grayscale = val;
            break;
        case "contrast":
            contrast = val;
            break;
        default:
            console.error(this)
            break;
    }
    imageElement.style.filter = `saturate(${sat/100}) grayscale(${grayscale/100}) contrast(${contrast/100})`
}