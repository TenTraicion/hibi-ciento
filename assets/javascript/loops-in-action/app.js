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
