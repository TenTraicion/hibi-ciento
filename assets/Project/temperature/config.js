// c2f

const fValue = document.querySelector(".c2f button");

function c2f() {
    const c = document.getElementById("celsius").value;
    const span = document.getElementById("c2f");
    span.innerHTML = "";
    const f = c * 1.8 + 32;
    const o = `${f.toFixed(2)}℉`
    span.textContent = o;
    console.log(`The result of ${c}℃ is: ${f}℉`);
}

fValue.addEventListener("click", c2f);

// f2c

const cValue = document.querySelector(".f2c button");

function f2c() {
    const f = document.getElementById("fahrenheit").value;
    const span = document.getElementById("f2c");
    span.innerHTML = "";
    const c = (f - 32) / 1.8;
    const o = `${c.toFixed(2)}℃`
    span.textContent = o;
    console.log(`The result of ${f}℉ is: ${c}℃`);
}

cValue.addEventListener("click", f2c);
