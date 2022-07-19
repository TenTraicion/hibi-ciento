// Sum

const calcSum = document.querySelector("#calculator button");

function calc() {
    const userInput = document.getElementById("user-number").value;
    
    let sum = 0;

    for (let i = 0; i <= userInput; i++) {
        sum = sum + i;
    }

    const output = document.getElementById("calculated-sum");
    output.textContent = sum;
    output.style.display = "block";
    console.log(`Calculated Sum upto ${userInput} is: ${sum}`);
}

calcSum.addEventListener("click", calc);

// Highlight

const hlbtn = document.querySelector("#highlight-links button");

function hlLinks () {
    const anchors = document.querySelectorAll("#highlight-links a");

    for (const anchor of anchors) {
        anchor.classList.add("highlight");
    }

    console.log(`All anchor links have been highlighted!`);
}

hlbtn.addEventListener("click", hlLinks);

// Display