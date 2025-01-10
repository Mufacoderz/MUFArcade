const cells = document.querySelectorAll("[data-cell]");
const winnerMessage = document.getElementById("winnerMessage");
const resetButton = document.getElementById("resetButton");

let isCircleTurn = false;

// Fungsi untuk memulai ulang permainan
function resetGame() {
  isCircleTurn = false;
  winnerMessage.classList.add("hidden");
  winnerMessage.textContent = "";
  cells.forEach(cell => {
    cell.textContent = ""; // Kosongkan isi sel
    cell.removeEventListener("click", handleCellClick); // Hapus event listener lama
    cell.addEventListener("click", handleCellClick, { once: true }); // Tambahkan event listener baru
  });
}

// Fungsi untuk menangani klik pada sel
function handleCellClick(event) {
  const cell = event.target;
  const currentClass = isCircleTurn ? "O" : "X";
  cell.textContent = currentClass;
  isCircleTurn = !isCircleTurn;

  if (checkWinner(currentClass)) {
    winnerMessage.textContent = `Winner: ${currentClass}!`;
    winnerMessage.classList.remove("hidden");
  }
}

// Fungsi untuk memeriksa pemenang
function checkWinner(currentClass) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === currentClass;
    });
  });
}

// Inisialisasi permainan
resetButton.addEventListener("click", resetGame);
resetGame();
