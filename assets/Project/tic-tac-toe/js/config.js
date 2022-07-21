function openConfig() {
  ovrl.style.display = "block";
  backdrop.style.display = "block";
  console.log("Input Box Opened!")
}

function closeConfig() {
  ovrl.style.display = "none";
  backdrop.style.display = "none";
  console.log("Input Box Closed!")
}

function saveConfig(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const uname = data.get("uname");
  console.log(`Welcome to the Board! ${uname}!`);
}
