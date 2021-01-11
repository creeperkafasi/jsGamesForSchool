function playSound(src) {
    let sound = new Audio();
    sound.src = src;
    sound.play();
}