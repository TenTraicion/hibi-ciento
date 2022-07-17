let pname = document.getElementById("pName");
let remains = document.getElementById("remain");
let max = pname.maxLength;

function update(event) {
    let entry = event.target.value;
    let entryLength = entry.length;
    
    let count = max - entryLength;

    remains.textContent = count;
};

pname.addEventListener("input", update);
