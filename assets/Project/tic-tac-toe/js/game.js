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
  event.target.textContent = players[active].symbol;
  event.target.classList.add("del");
  switchP();
}
