function startGame() {
  if(players[0].name === "" || players[1].name === "") {
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

  console.log(`${players[active].name} has Played!`);

  switchP();
}
