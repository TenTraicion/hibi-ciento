function openConfig() {
  ovrl.style.display = "block";
  backdrop.style.display = "block";
  console.log("Input Box Opened!")
}

function closeConfig() {
  ovrl.style.display = "none";
  backdrop.style.display = "none";
  form.firstElementChild.classList.remove("error");
  error.textContent = "";
  console.log("Input Box Closed!")
}

function saveConfig(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const uname = data.get("uname").trim();

  if (!uname) {
    event.target.firstElementChild.classList.add("error");
    error.textContent = "Please Enter a Valid Name";
    return;
  }

  console.log(`Welcome to the Board! ${uname}!`);
}
