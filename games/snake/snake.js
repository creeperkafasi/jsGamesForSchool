let canvas = document.getElementById("oyun-canvas");
let ctx = canvas.getContext("2d");
let puanElement = document.getElementById("puanData");
let gameoverElement = document.getElementById("gameoverMesaj");
[canvas.width, canvas.height] = [10, 10];
let snake = [
    [1, 1],
    [2, 1],
    [3, 1],
]
let direction;
let gameover = false;
let puan = 0;
let snakeBodyColor = "#ff5d47";
let snakeHeadColor = "#ff1e00";
let appleColor = "#ff7700";
let applePos = [];
genApple();

window.addEventListener("keydown", (e) => {
    let key = e.key;
    console.log("keydown " + e.key);
    if (!gameover) {
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
            case " ":
                direction = undefined;
        }
    }

});

setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = snakeBodyColor;
    snake.forEach(pixel => {
        ctx.fillRect(pixel[0], pixel[1], 1, 1);
    });
    ctx.fillStyle = snakeHeadColor;
    ctx.fillRect(snake[snake.length - 1][0], snake[snake.length - 1][1], 1, 1);
    ctx.fillStyle = appleColor;
    ctx.fillRect(applePos[0], applePos[1], 1, 1);
    puanElement.innerText = puan;
}, 1);

setInterval(function() {
    if (direction) {

        //Hareket sistemi
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

        let head = snake[snake.length - 1];

        //Kaybetme sistemi
        let hit = false;
        snake.forEach((pixel, i) => {
            if ((pixel[0] == head[0]) &&
                (pixel[1] == head[1]) &&
                (i != snake.length - 1)) {
                hit = true;
            }
        })
        if ((head[0] < 0) || (head[0] > 9) || (head[1] < 0) || (head[1] > 9)) {
            hit = true;
        }
        if (hit == true) {
            console.log("hit");
            direction = undefined;
            gameover = true;
            gameoverElement.style.visibility = "visible";
        }

        //Puan alma sistemi
        if (head[0] == applePos[0] && head[1] == applePos[1]) {
            addSegment();
            puan += 1;
            genApple();
        }
    }

}, 500);

//Puan kazanınca uzama sistemi
function addSegment() {
    switch (direction) {
        case "up":
            snake.push(
                [
                    snake[snake.length - 1][0],
                    snake[snake.length - 1][1] - 1
                ]);
            break;
        case "left":
            snake.push(
                [
                    snake[snake.length - 1][0] - 1,
                    snake[snake.length - 1][1]
                ]);
            break;
        case "down":
            snake.push(
                [
                    snake[snake.length - 1][0],
                    snake[snake.length - 1][1] + 1
                ]);
            break;
        case "right":
            snake.push(
                [
                    snake[snake.length - 1][0] + 1,
                    snake[snake.length - 1][1]
                ]);
            break;
        default:
            break;
    }
}

function snakeReset() {
    direction = undefined;
    puan = 0;
    snake = [
        [1, 1],
        [2, 1],
        [3, 1],
    ]
    gameover = false;
    gameoverElement.style.visibility = "hidden";
    genApple();
}

function genApple() {
    let generated = true;

    while (generated) {
        applePos[0] = clamp(Math.floor(Math.random() * 10), 1, 8);
        applePos[1] = clamp(Math.floor(Math.random() * 10), 1, 8);

        snake.forEach(part => {
            if (part[0] == applePos[0] || part[1] == applePos[1]) {
                generated = true;
            } else generated = false;
        });
    }
}

//https://stackoverflow.com/questions/11409895/whats-the-most-elegant-way-to-cap-a-number-to-a-segment
function clamp(n, min, max) {
    return Math.min(Math.max(n, min), max);
}