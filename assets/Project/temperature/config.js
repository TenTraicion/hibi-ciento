// copyright
const copy = document.getElementById("copy");
const udate = new Date();
copy.innerText = udate.getFullYear();

// show date
const show = document.getElementById("date");

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

const days = [
    'Sun',
    'Mon',
    'Tues',
    'Wednes',
    'Thurs',
    'Fri',
    'Satur'
  ]

const da = udate.getDay();
const day = days[da];
const date = udate.getDate();
const mo = udate.getMonth();
const month = months[mo];
const year = udate.getFullYear();
const today = `${day}day, ${month} ${date}, ${year}`;
show.innerHTML = today;

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

// Calculation

const ix = document.getElementById("x"); 
const iy = document.getElementById("y");
const o = document.getElementById("calc");
const s = document.getElementById("s");
const a = document.getElementById("a");
const m = document.getElementById("m");
const d = document.getElementById("d");
const c = document.getElementById("c");
const f = document.getElementById("r");

function sum() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    const r = x + y;
    const p = `The ans of ${x} + ${y} is: ${r}`
    console.log(p);
    c.textContent = "+";
    o.textContent = r;
    f.textContent = p;
}

s.addEventListener("click", sum);

function add() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    const r = x - y;
    const p = `The ans of ${x} - ${y} is: ${r}`
    console.log(p);
    c.textContent = "-";
    o.textContent = r;
    f.textContent = p;
}

a.addEventListener("click", add);

function mul() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    const r = x * y;
    const p = `The ans of ${x} x ${y} is: ${r}`
    console.log(p);
    c.textContent = "X";
    o.textContent = r;
    f.textContent = p;
}

m.addEventListener("click", mul);

function div() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    const r = x / y;
    const p = `The ans of ${x} / ${y} is: ${r.toFixed(4)}`
    console.log(p);
    c.textContent = "/";
    o.textContent = r.toFixed(4);
    f.textContent = p;
}

d.addEventListener("click", div);
