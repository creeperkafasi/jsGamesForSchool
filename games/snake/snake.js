let canvas = document.getElementById("oyun-canvas");
let ctx = canvas.getContext("2d");
[canvas.width, canvas.height] = [10, 10];
let snake = [
    [0, 1],
    [1, 1],
    [2, 1]
]
let direction;

window.addEventListener("keydown", (e) => {
    let key = e.key;
    console.log(e.key);
    switch (key) {
        case "w":
            direction = "up";
            break;
        case "a":
            direction = "left";
            break;
        case "s":
            direction = "down";
            break;
        case "d":
            direction = "right";
            break;
    }
});

setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff5d47";
    snake.forEach(pixel => {
        ctx.fillRect(pixel[0], pixel[1], 1, 1);
    });
    ctx.fillStyle = "#ff1e00";
    ctx.fillRect(snake[snake.length - 1][0], snake[snake.length - 1][1], 1, 1);
}, 1);

setInterval(function() {
    if (direction) {
        for (let i = 0; i < snake.length; i++) {
            if (snake[i + 1]) {
                snake[i] = snake[i + 1].slice();
            } else {
                switch (direction) {
                    case "up":
                        snake[snake.length - 1][1]--;
                        break;
                    case "left":
                        snake[snake.length - 1][0]--;
                        break;
                    case "down":
                        snake[snake.length - 1][1]++;
                        break;
                    case "right":
                        snake[snake.length - 1][0]++;
                        break;

                    default:
                        break;
                }
            }
        }
    }

}, 1000);