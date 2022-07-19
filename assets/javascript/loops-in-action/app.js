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

const display = document.querySelector("#user-data button");

function disData () {
    const signIn = {
        name: "TenTraicion",
        age: 23,
        isAdmin: true
    };

    const uData = document.getElementById("output-user-data");
    uData.innerHTML = "";
    
    for (const key in signIn) {
        const newLi = document.createElement("li")
        const db = `${key.toUpperCase()}: ${signIn[key]}`;
        newLi.textContent = db;
        uData.append(newLi);
        
        console.log("User Data has been Displayed!");
    }
}

display.addEventListener("click", disData);

// Statistics

const statbtn = document.querySelector("#statistics button");

function roll() {
    return  Math.floor(Math.random() * 6) + 1; //floor to round, and random to randomize
}

function dice() {
    const userInput = document.getElementById("user-target-number").value;
    const diceList = document.getElementById("dice-rolls");
    diceList.innerHTML = "";

    let target = false;
    let nroll = 0;

    while (!target) {
        const rolls = roll();
        nroll++;

        const newLi = document.createElement("li");
        const output = `Roll ${nroll}: ${rolls}`;
        newLi.textContent = output;
        diceList.append(newLi);
        target = rolls == userInput; // change value of target to true;
        console.log("Random Rolls COunt Generated!");
    }

    const outputX = document.getElementById("output-total-rolls");
    const outputY = document.getElementById("output-target-number");

    outputY.textContent = userInput;
    outputX.textContent = nroll;
}

statbtn.addEventListener("click", dice);
