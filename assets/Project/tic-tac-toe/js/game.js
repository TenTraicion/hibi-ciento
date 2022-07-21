function startGame() {
	if (players[0].name === "" || players[1].name === "") {
		alert("Please Set names before Starting a Game!");
		console.log("No Player on Board!");
		return;
	}
	activePlayer.textContent = players[active].name;
	game.style.display = "block";
}

function switchP() {
	if (active === 0) {
		active = 1;
	} else {
		active = 0;
	}
	activePlayer.textContent = players[active].name;
}

function sfield(event) {
	const setField = event.target;
	const setCol = setField.dataset.col - 1;
	const setRow = setField.dataset.row - 1;

	if (gameData[setRow][setCol] > 0) {
		alert("Please select an Empty Field!");
		console.log("Invalid Selection! Try Again!");
		return;
	}

	setField.textContent = players[active].symbol;
	setField.classList.add("del");

	gameData[setRow][setCol] = active + 1;

  const win = over();

	console.log(`${players[active].name} has Played!`);

  round++;
	switchP();
}

function over() {
  // Check Rows
  for (let i = 0; i < 3; i++){
    if (
      gameData[i][0] > 0 && 
      gameData[i][0] === gameData[i][1] && 
      gameData[i][0] === gameData[i][2]
      ) {
      return gameData[i][0];
    }
  }

  // Check Cols
  for (let i = 0; i < 3; i++){
    if (
      gameData[0][i] > 0 && 
      gameData[0][i] === gameData[1][i] && 
      gameData[0][i] === gameData[2][i]
      ) {
      return gameData[0][i];
    }
  }

  // Check \
  if (
    gameData[0][0] > 0 && 
    gameData[0][0] === gameData[1][1] && 
    gameData[0][0] && gameData[2][2]
    ) {
      return gameData[0][0];
    }

    // Check /
  if (
    gameData[2][0] > 0 && 
    gameData[2][0] === gameData[1][1] && 
    gameData[2][0] && gameData[0][2]
    ) {
      return gameData[2][0];
    }

    if (round === 9) {
      return -1;
    }

    return 0;
}
