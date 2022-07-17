let pClicks = document.querySelector(".pc");

function fclick() {
    pClicks.textContent = "Clicked!";
    console.log("Pragaraph Clicked");
}

console.log(pClicks);

pClicks.addEventListener("click", fclick);

//input listener
let inp = document.querySelector("input");

function retrieve() {
    console.log(inp.value);
}

inp.addEventListener("input", retrieve);

