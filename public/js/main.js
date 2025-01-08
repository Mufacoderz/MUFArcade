const games = [
    { id: 'snakeGame', url: 'daftar-games/Snake-Game/snake.html' },
    { id: 'suitGame', url: 'daftar-games/Suit-Game/suit.html' }
  ];

  // Menambahkan event listener untuk setiap tombol
  games.forEach(game => {
    document.getElementById(game.id).addEventListener('click', () => {
      window.location.href = game.url;
    });
  });