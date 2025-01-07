
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

let direction;
let food = {
  x: Math.floor(Math.random() * 19 + 1) * box,
  y: Math.floor(Math.random() * 19 + 1) * box,
};

let score = 0;

// Control the snake
document.addEventListener("keydown", directionControl);

function directionControl(event) {
  if (event.keyCode === 37 && direction !== "RIGHT") {
    direction = "LEFT";
  } else if (event.keyCode === 38 && direction !== "DOWN") {
    direction = "UP";
  } else if (event.keyCode === 39 && direction !== "LEFT") {
    direction = "RIGHT";
  } else if (event.keyCode === 40 && direction !== "UP") {
    direction = "DOWN";
  }
}

// Check collision
function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x === array[i].x && head.y === array[i].y) {
      return true;
    }
  }
  return false;
}

// Draw everything to the canvas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "blue" : "lightblue";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeStyle = "darkblue";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // Move snake head
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "LEFT") snakeX -= box;
  if (direction === "UP") snakeY -= box;
  if (direction === "RIGHT") snakeX += box;
  if (direction === "DOWN") snakeY += box;

  // If snake eats the food
  if (snakeX === food.x && snakeY === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box,
    };
  } else {
    snake.pop();
  }

  // Add new head
  let newHead = { x: snakeX, y: snakeY };

  // Game over
  if (
    snakeX < 0 ||
    snakeX >= canvas.width ||
    snakeY < 0 ||
    snakeY >= canvas.height ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    alert("Game Over! Skor kamu: " + score);
  }

  snake.unshift(newHead);

  // Draw score
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 5, canvas.height - 5);
}

// Call draw function every 100 ms
let game = setInterval(draw, 200);
