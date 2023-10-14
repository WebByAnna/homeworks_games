(() => {
    let playing = true,
      activeHole = 1,
      score = 0, // Счетчик убитых кротов
      misses = 0; // Счетчик промахов
  
    const stop = () => playing = false;
  
    const getHole = index => document.getElementById(`hole${index}`);
    const deactivateHole = index => getHole(index).className = 'hole';
    const activateHole = index => getHole(index).className = 'hole hole_has-mole';
  
    const updateScore = () => {
      const deadSpan = document.getElementById('dead');
      deadSpan.textContent = score;
    };
  
    const updateMisses = () => {
      const lostSpan = document.getElementById('lost');
      lostSpan.textContent = misses;
    };
  
    const resetGame = () => {
      score = 0;
      misses = 0;
      updateScore();
      updateMisses();
    };
  
    const handleWhack = (event) => {
      if (event.target.classList.contains('hole_has-mole')) {
        score++;
        updateScore();
      } else {
        misses++;
        updateMisses();
        if (misses >= 5) {
          alert('Игра окончена. Вы проиграли!');
          resetGame();
        }
      }
  
      if (score >= 10) {
        alert('Поздравляем! Вы победили!');
        resetGame();
      }
    };
  
    for (let i = 1; i <= 9; i++) {
      getHole(i).addEventListener('click', handleWhack);
    }
  
    next();
  })();
  