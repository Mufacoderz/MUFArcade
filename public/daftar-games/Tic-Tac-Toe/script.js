const cells = document.querySelectorAll("[data-cell]");
let isCircleTurn = false;

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const currentClass = isCircleTurn ? "O" : "X";
    cell.textContent = currentClass;
    isCircleTurn = !isCircleTurn;
    checkWinner();
  }, { once: true });
});

function checkWinner() {
  const winnerMessage = document.getElementById("winnerMessage");
  // Check winner logic (basic example)
  if (Math.random() < 0.5) {
    winnerMessage.textContent = "Winner: X!";
  } else {
    winnerMessage.textContent = "Winner: O!";
  }
  winnerMessage.classList.remove("hidden");
}
