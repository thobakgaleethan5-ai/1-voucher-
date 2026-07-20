const player = document.getElementById("player");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const scoreText = document.getElementById("score");

let playerX = 135;
let score = 0;

// Move player left
leftBtn.addEventListener("click", () => {
    playerX -= 20;
    if (playerX < 0) playerX = 0;
    player.style.left = playerX + "px";
});

// Move player right
rightBtn.addEventListener("click", () => {
    playerX += 20;
    if (playerX > 270) playerX = 270;
    player.style.left = playerX + "px";
});

// Keyboard controls
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        playerX -= 20;
    }

    if (e.key === "ArrowRight") {
        playerX += 20;
    }

    if (playerX < 0) playerX = 0;
    if (playerX > 270) playerX = 270;

    player.style.left = playerX + "px";
});

// Increase score every second
setInterval(() => {
    score++;
    scoreText.textContent = "Score: " + score;
}, 1000);
