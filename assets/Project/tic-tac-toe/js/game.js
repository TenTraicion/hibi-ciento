function startGame() {
  if(players[0].name === "" || players[1].name === "") {
    alert("Please Set names before Starting a Game!");
    console.log("No Player on Board!");
    return;
  }
  game.style.display = "block";
}