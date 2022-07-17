let pClicks = document.querySelector(".pc");

function fclick() {
    pClicks.textContent = "Clicked!";
    console.log("Pragaraph Clicked");
}

console.log(pClicks);

pClicks.addEventListener("click", fclick);

