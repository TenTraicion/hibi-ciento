let pClicks = document.querySelector(".pc");

function fclick() {
    pClicks.textContent = "Clicked!";
    console.log("Pragaraph Clicked");
}

console.log(pClicks);

pClicks.addEventListener("click", fclick);

//input listener
let inp = document.querySelector("input");

function retrieve(event) {
    // let val = inp.value; same as below
    let val = event.target.value; // same as up, combined data
    // let val = event.data; individual data
    console.log(val);
}

inp.addEventListener("input", retrieve);

