const pname = document.getElementById("pName");
const remains = document.getElementById("remain");
const max = pname.maxLength;

function update(event) {
    const entry = event.target.value;
    const entryLength = entry.length;
    
    const count = max - entryLength;

    remains.textContent = count;
    console.log ("Counted!")

    if(count <=10) {
        remains.className = "warning";
        pname.classList.add("warning");
    }
}

pname.addEventListener("input", update);
